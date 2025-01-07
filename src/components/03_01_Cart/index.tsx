import * as Yup from 'yup'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../02_02_MenuList'
import { useNavigate } from 'react-router-dom'
import InputMask from 'react-input-mask-next'

import * as S from './styles'
import { useFormik } from 'formik'
import { useSubmitOrderMutation } from '../../services/api'

interface FormValues {
  deliveryName: string
  deliveryAddress: string
  deliveryCity: string
  deliveryZIP: string
  deliveryAddressNumber: string
  deliveryExtraText: string
  cardOwner: string
  cardNumber: string
  cardCVV: string
  cardExpireMonth: string
  cardExpireYear: string
}

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const [step, setStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [orderData, setOrderData] = useState<{ orderId?: string } | null>(null)
  const navigate = useNavigate()
  const [submitOrder] = useSubmitOrderMutation()

  const form = useFormik({
    initialValues: {
      // Dados de Entrega
      deliveryName: '',
      deliveryAddress: '',
      deliveryCity: '',
      deliveryZIP: '',
      deliveryAddressNumber: '',
      deliveryExtraText: '',
      // Dados de Pagamento
      cardOwner: '',
      cardNumber: '',
      cardCVV: '',
      cardExpireMonth: '',
      cardExpireYear: ''
    },
    validationSchema: Yup.object(
      step === 2
        ? {
            deliveryName: Yup.string().required('O campo é obrigatório'),
            deliveryAddress: Yup.string().required('O campo é obrigatório'),
            deliveryCity: Yup.string().required('O campo é obrigatório'),
            deliveryZIP: Yup.string()
              .test(
                'exact-length',
                'O campo precisa ter 9 caracteres',
                (value) => (value || '').replace(/_/g, '').length === 9
              )
              .min(9, 'O campo precisa ter 9 caracteres')
              .max(9, 'O campo precisa ter 9 caracteres')
              .required('O campo é obrigatório'),
            deliveryAddressNumber: Yup.string().required(
              'O campo é obrigatório'
            )
          }
        : {
            cardOwner: Yup.string().required('O campo é obrigatório'),
            cardNumber: Yup.string()
              .test(
                'exact-length',
                'O campo precisa ter 19 caracteres',
                (value) => (value || '').replace(/_/g, '').length === 19
              )
              .min(19, 'O campo precisa ter 19 caracteres')
              .max(19, 'O campo precisa ter 19 caracteres')
              .required('O campo é obrigatório'),
            cardCVV: Yup.string()
              .test(
                'exact-length',
                'O campo precisa ter 3 caracteres',
                (value) => (value || '').replace(/_/g, '').length === 3
              )
              .min(3, 'O campo precisa ter 3 caracteres')
              .max(3, 'O campo precisa ter 3 caracteres')
              .required('O campo é obrigatório'),
            cardExpireMonth: Yup.string()
              .test(
                'exact-length',
                'O campo precisa ter 2 caracteres',
                (value) => (value || '').replace(/_/g, '').length === 2
              )
              .min(2, 'O campo precisa ter 2 caracteres')
              .max(2, 'O campo precisa ter 2 caracteres')
              .required('O campo é obrigatório'),
            cardExpireYear: Yup.string()
              .test(
                'exact-length',
                'O campo precisa ter 4 caracteres',
                (value) => (value || '').replace(/_/g, '').length === 4
              )
              .min(4, 'O campo precisa ter 4 caracteres')
              .max(4, 'O campo precisa ter 4 caracteres')
              .required('O campo é obrigatório')
          }
    ),
    onSubmit: async (values) => {
      if (step < 3) {
        handleNextStep()
      } else {
        const submissionData = {
          products: items.map((item) => ({
            id: item.dish.id,
            price: item.dish.preco
          })),
          delivery: {
            receiver: values.deliveryName,
            address: {
              description: values.deliveryAddress,
              city: values.deliveryCity,
              zipCode: values.deliveryZIP,
              number: values.deliveryAddressNumber,
              complement: values.deliveryExtraText
            }
          },
          payment: {
            card: {
              name: values.cardOwner,
              number: values.cardNumber,
              code: values.cardCVV,
              expires: {
                month: values.cardExpireMonth,
                year: values.cardExpireYear
              }
            }
          }
        }

        try {
          setIsLoading(true)
          setErrorMessage('')
          const response = await submitOrder(submissionData).unwrap()
          setOrderData(response)
          handleNextStep()
        } catch (error) {
          const err = error as Error
          setErrorMessage(err.message || 'Erro desconhecido.')
        } finally {
          setIsLoading(false)
        }
      }
    }
  })

  const checkInputHasError = (fieldName: keyof FormValues) => {
    const hasError = !!form.errors[fieldName]
    return hasError
  }

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = ({
    restaurantId,
    dishId
  }: {
    restaurantId: number
    dishId: number
  }) => {
    dispatch(remove({ restaurantId, dishId }))
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return acumulador + (valorAtual.dish.preco || 0)
    }, 0)
  }

  const handleNextStep = async () => {
    const errors = await form.validateForm()

    const hasErrors = Object.keys(errors).some((key) => {
      if (step === 2) {
        // Campos relacionados ao passo 2 (entrega)
        return [
          'deliveryName',
          'deliveryAddress',
          'deliveryCity',
          'deliveryZIP',
          'deliveryAddressNumber'
        ].includes(key)
      } else if (step === 3) {
        // Campos relacionados ao passo 3 (pagamento)
        return [
          'cardOwner',
          'cardNumber',
          'cardCVV',
          'cardExpireMonth',
          'cardExpireYear'
        ].includes(key)
      }
      return false
    })

    if (hasErrors) {
      console.log('Por favor, corrija os erros antes de continuar.')
      return
    }

    if (step < 4) {
      setStep(step + 1)
    }
  }

  const handlePreviousStep = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <>
            <ul>
              {items.map((item) => (
                <S.CartItem key={`${item.restaurant.id}-${item.dish.id}`}>
                  <img src={item.dish.foto} alt={item.dish.nome} />
                  <div>
                    <h3>{item.dish.nome}</h3>
                    <span>{formataPreco(item.dish.preco)}</span>
                  </div>
                  <button
                    onClick={() =>
                      removeItem({
                        restaurantId: item.restaurant.id,
                        dishId: item.dish.id
                      })
                    }
                    type="button"
                  />
                </S.CartItem>
              ))}
            </ul>
            <S.CartPrices>
              <span>Valor Total</span>
              <span>{formataPreco(getTotalPrice())}</span>
            </S.CartPrices>
            <S.CartButton
              onClick={handleNextStep}
              title="Clique aqui para continuar com a entrega"
              type="button"
            >
              Continuar com a entrega
            </S.CartButton>
            <S.CartButton onClick={closeCart} type="button">
              Voltar para a loja
            </S.CartButton>
          </>
        )
      case 2:
        return (
          <>
            <S.CartDataInput>
              <h2>Entrega</h2>
              <form onSubmit={form.handleSubmit}>
                <div className="DataField">
                  <span>Quem irá receber</span>
                  <input
                    type="text"
                    placeholder="Exemplo: José da Silva"
                    id="deliveryName"
                    name="deliveryName"
                    value={form.values.deliveryName}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkInputHasError('deliveryName') ? 'error' : ''
                    }
                  />
                </div>
                <div className="DataField">
                  <span>Endereço</span>
                  <input
                    type="text"
                    placeholder="Exemplo: Rua Amazonas"
                    id="deliveryAddress"
                    name="deliveryAddress"
                    value={form.values.deliveryAddress}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkInputHasError('deliveryAddress') ? 'error' : ''
                    }
                  />
                </div>
                <div className="DataField">
                  <span>Cidade</span>
                  <input
                    type="text"
                    placeholder="Exemplo: São Paulo"
                    id="deliveryCity"
                    name="deliveryCity"
                    value={form.values.deliveryCity}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkInputHasError('deliveryCity') ? 'error' : ''
                    }
                  />
                </div>
                <div className="DataArea">
                  <div className="DataField">
                    <span>CEP</span>
                    <InputMask
                      type="text"
                      placeholder="Exemplo: 12345-678"
                      id="deliveryZIP"
                      name="deliveryZIP"
                      value={form.values.deliveryZIP}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('deliveryZIP') ? 'error' : ''
                      }
                      mask="99999-999"
                    />
                  </div>
                  <div className="DataField">
                    <span>Número</span>
                    <input
                      type="text"
                      placeholder="Exemplo: 123"
                      id="deliveryAddressNumber"
                      name="deliveryAddressNumber"
                      value={form.values.deliveryAddressNumber}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('deliveryAddressNumber')
                          ? 'error'
                          : ''
                      }
                    />
                  </div>
                </div>
                <div className="DataField">
                  <span>Complemento (opcional)</span>
                  <input
                    type="text"
                    placeholder="Exemplo: Em frente a Padaria"
                    id="deliveryExtraText"
                    name="deliveryExtraText"
                    value={form.values.deliveryExtraText}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                </div>
              </form>
            </S.CartDataInput>
            <S.CartButton
              onClick={(e) => {
                e.preventDefault()
                form.handleSubmit()
              }}
              type="button"
            >
              Continuar com o pagamento
            </S.CartButton>
            <S.CartButton onClick={handlePreviousStep} type="button">
              Voltar para o carrinho
            </S.CartButton>
          </>
        )
      case 3:
        return (
          <>
            <S.CartDataInput>
              <h2>
                Pagamento - Valor a pagar: {formataPreco(getTotalPrice())}
              </h2>
              <form>
                <div className="DataField">
                  <span>Nome no Cartão</span>
                  <input
                    type="text"
                    placeholder="Exemplo: JOSE DA SILVA"
                    id="cardOwner"
                    name="cardOwner"
                    value={form.values.cardOwner}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cardOwner') ? 'error' : ''}
                  />
                </div>
                <div className="DataArea">
                  <div className="DataField WidFix">
                    <span>Número do Cartão</span>
                    <InputMask
                      type="text"
                      placeholder="Exemplo: 1111-1111-1111-1111"
                      id="cardNumber"
                      name="cardNumber"
                      value={form.values.cardNumber}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('cardNumber') ? 'error' : ''
                      }
                      mask="9999-9999-9999-9999"
                    />
                  </div>
                  <div className="DataField">
                    <span>CVV</span>
                    <InputMask
                      type="text"
                      placeholder="Ex: 123"
                      id="cardCVV"
                      name="cardCVV"
                      value={form.values.cardCVV}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('cardCVV') ? 'error' : ''}
                      mask="999"
                    />
                  </div>
                </div>
                <div className="DataArea">
                  <div className="DataField">
                    <span>Mês de Vencimento</span>
                    <InputMask
                      type="text"
                      placeholder="Exemplo: 01"
                      id="cardExpireMonth"
                      name="cardExpireMonth"
                      value={form.values.cardExpireMonth}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('cardExpireMonth') ? 'error' : ''
                      }
                      mask="99"
                    />
                  </div>
                  <div className="DataField">
                    <span>Ano de Vencimento</span>
                    <InputMask
                      type="text"
                      placeholder="Exemplo: 2030"
                      id="cardExpireYear"
                      name="cardExpireYear"
                      value={form.values.cardExpireYear}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('cardExpireYear') ? 'error' : ''
                      }
                      mask="9999"
                    />
                  </div>
                </div>
              </form>
            </S.CartDataInput>
            <S.CartButton
              onClick={(e) => {
                e.preventDefault()
                form.handleSubmit()
              }}
              type="button"
            >
              Finalizar Pedido
            </S.CartButton>
            <S.CartButton onClick={handlePreviousStep} type="button">
              Voltar a Entrega
            </S.CartButton>
          </>
        )
      case 4:
        return (
          <>
            <S.CartDataInput>
              <h2>Pedido Realizado (Código: {orderData?.orderId})</h2>
              <p>
                Estamos felizes em informar que seu pedido já está em processo
                de preparação e, em breve, será entregue no endereço fornecido.
              </p>
              <p>
                Gostaríamos de ressaltar que nossos entregadores não estão
                autorizados a realizar cobranças extras.
              </p>
              <p>
                Lembre-se da importância de higienizar as mãos após o
                recebimento do pedido, garantindo assim sua segurança e
                bem-estar durante a refeição.
              </p>
              <p>
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica. Bom apetite!
              </p>
            </S.CartDataInput>
            <S.CartButton
              onClick={() => {
                closeCart()
                navigate('/')
              }}
              type="button"
            >
              Concluir
            </S.CartButton>
          </>
        )
      default:
        return null
    }
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.CartOverlay onClick={closeCart} />
      <S.CartSidebar>
        {items.length === 0 ? (
          <>
            <S.CartMessage>
              <span>
                Carrinho vazio, por favor inclua um item para avançarmos com a
                compra.
              </span>
            </S.CartMessage>
            <S.CartButton onClick={closeCart} type="button">
              Voltar para a loja
            </S.CartButton>
          </>
        ) : (
          renderStepContent()
        )}
      </S.CartSidebar>
    </S.CartContainer>
  )
}

export default Cart
