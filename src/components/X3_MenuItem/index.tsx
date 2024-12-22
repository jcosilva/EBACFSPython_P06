import * as S from './styles'

type Props = {
  itemkey: number
  id: number
  image: string
  title: string
  description: string
}

const MenuItem = ({ itemkey, id, image, title, description }: Props) => {
  const getDescription = (description: string) => {
    if (description.length > 120) {
      return description.slice(0, 117) + '...'
    }
    return description
  }

  return (
    <S.Card>
      <S.CardImage>
        <img src={image} alt={title} />
      </S.CardImage>
      <S.CardText>
        <S.Title>{title}</S.Title>
        <S.Descricao>
          {getDescription(description)}
          <span style={{ visibility: 'hidden' }}>{itemkey + id}</span>
        </S.Descricao>
        <S.Button>Adicionar ao Carrinho</S.Button>
      </S.CardText>
    </S.Card>
  )
}

export default MenuItem
