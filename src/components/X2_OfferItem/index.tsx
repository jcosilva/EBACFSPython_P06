import Tag from '../X4_Tag'
import * as S from './styles'

import efoodStar from '../../assets/images/EFOOD_ESTRELA.png'

type Props = {
  key: number
  image: string
  title: string
  description: string
  category: number
  infos: string[]
}

const OfferItem = ({
  key,
  image,
  title,
  description,
  category,
  infos
}: Props) => (
  <S.Card>
    <img src={image} alt={title} />
    <S.CardText>
      <S.Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </S.Infos>
      <S.TitleBox>
        <S.Title>{title}</S.Title>
        <S.Grade>
          <span>{category}</span>
          <img src={efoodStar} />
        </S.Grade>
      </S.TitleBox>
      <S.Descricao>{description}</S.Descricao>
      <S.Button href="/menu">Saiba mais</S.Button>
    </S.CardText>
  </S.Card>
)

export default OfferItem
