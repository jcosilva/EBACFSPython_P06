import * as S from './styles'

type Props = {
  key: number
  image: string
  title: string
  description: string
}

const MenuItem = ({ key, image, title, description }: Props) => (
  <S.Card>
    <img src={image} alt={title} />
    <S.CardText>
      <S.Title>{title}</S.Title>
      <S.Descricao>{description}</S.Descricao>
      <S.Button>Adicionar ao Carrinho</S.Button>
    </S.CardText>
  </S.Card>
)

export default MenuItem
