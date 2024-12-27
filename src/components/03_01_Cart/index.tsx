import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../02_02_MenuList'

import * as S from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

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
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return (acumulador += valorAtual.dish.preco!)
    }, 0)
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.CartOverlay onClick={closeCart} />
      <S.CartSidebar>
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
          title="Clique aqui para continuar com a entrega"
          type="button"
        >
          Continuar com a entrega
        </S.CartButton>
      </S.CartSidebar>
    </S.CartContainer>
  )
}

export default Cart
