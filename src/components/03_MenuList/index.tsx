import * as S from './styles'
import MenuDisplay from '../X3_MenuItem'
import { useState } from 'react'

import iconeFechar from '../../assets/images/ICONE_FECHAR.png'
import { Button } from '../X3_MenuItem/styles'

interface ModalState {
  isVisible: boolean
  foto: string
  nome: string
  preco: number
  id: number
  descricao: string
  porcao: string
}

export type Props = {
  menu: Array<{
    foto: string
    nome: string
    preco: number
    id: number
    descricao: string
    porcao: string
  }>
}

const MenuList = ({ menu }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    foto: '',
    nome: '',
    preco: 0,
    id: 0,
    descricao: '',
    porcao: ''
  })

  const closeModal = () => {
    setModal({
      isVisible: false,
      foto: '',
      nome: '',
      preco: 0,
      id: 0,
      descricao: '',
      porcao: ''
    })
  }

  if (!menu || menu.length === 0) {
    return <p>Nenhum cardápio disponível para este restaurante</p>
  }

  return (
    <>
      <S.Container>
        <div className="container">
          <S.List>
            {menu.map((item) => (
              <li
                key={item.id}
                onClick={() => {
                  setModal({
                    isVisible: true,
                    foto: item.foto,
                    nome: item.nome,
                    preco: item.preco,
                    id: item.id,
                    descricao: item.descricao,
                    porcao: item.porcao
                  })
                }}
              >
                <MenuDisplay
                  key={item.id}
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

      {modal.isVisible && (
        <S.Modal isVisible={modal.isVisible}>
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
              <img src={modal.foto} alt={modal.nome} />
            </S.ModalImage>
            <S.ModalText>
              <div>
                <h4>{modal.nome}</h4>
                <p>{modal.descricao}</p>
                <p>Serve: {modal.porcao}</p>
              </div>
              <Button>
                Adicionar ao Carrinho - Preço: R$ {modal.preco.toFixed(2)}
              </Button>
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
