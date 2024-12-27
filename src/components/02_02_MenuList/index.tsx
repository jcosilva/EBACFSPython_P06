import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'
import { Restaurant } from '../../pages/01_Home'

import * as S from './styles'
import MenuDisplay from '../X3_MenuItem'

import iconeFechar from '../../assets/images/ICONE_FECHAR.png'

interface ModalState {
  isvisible: boolean
  restaurant: Restaurant | null
  dish: Restaurant['cardapio'][0] | null
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

export type Props = {
  restaurant: Restaurant
}

const MenuList = ({ restaurant }: Props) => {
  const dispatch = useDispatch()

  const [modal, setModal] = useState<ModalState>({
    isvisible: false,
    restaurant: null,
    dish: null
  })

  const closeModal = () => {
    setModal({
      isvisible: false,
      restaurant: null,
      dish: null
    })
  }

  const addToCart = () => {
    if (modal.restaurant && modal.dish) {
      const payload = {
        restaurant: modal.restaurant,
        dish: modal.dish
      }
      dispatch(add(payload))
      closeModal()
      dispatch(open())
    } else {
      console.error('Erro: Restaurante ou prato não selecionado.')
    }
  }

  if (!restaurant || !restaurant.cardapio || restaurant.cardapio.length === 0) {
    return <p>Nenhum cardápio disponível para este restaurante</p>
  }

  return (
    <>
      <S.Container>
        <div className="container">
          <S.List>
            {restaurant.cardapio.map((item) => (
              <li
                key={item.id}
                onClick={() => {
                  setModal({
                    isvisible: true,
                    restaurant,
                    dish: item
                  })
                }}
              >
                <MenuDisplay
                  itemkey={item.id}
                  id={item.id}
                  image={item.foto}
                  title={item.nome}
                  description={item.descricao}
                />
              </li>
            ))}
          </S.List>
        </div>
      </S.Container>

      {modal.isvisible && (
        <S.Modal $isvisible={modal.isvisible}>
          <S.ModalBox>
            <S.ModalClose>
              <img
                src={iconeFechar}
                alt="Ícone de fechar"
                onClick={closeModal}
                style={{ cursor: 'pointer' }}
              />
            </S.ModalClose>
            <S.ModalImage>
              <img src={modal.dish?.foto} alt={modal.dish?.nome} />
            </S.ModalImage>
            <S.ModalText>
              <div>
                <h4>{modal.dish?.nome}</h4>
                <p>{modal.dish?.descricao}</p>
                <p>Serve: {modal.dish?.porcao}</p>
              </div>
              <S.ModalButton onClick={addToCart}>
                Adicionar ao Carrinho - {formataPreco(modal.dish?.preco || 0)}
              </S.ModalButton>
            </S.ModalText>
          </S.ModalBox>
          <div
            className="overlay"
            onClick={closeModal}
            style={{ cursor: 'pointer' }}
          ></div>
        </S.Modal>
      )}
    </>
  )
}

export default MenuList
