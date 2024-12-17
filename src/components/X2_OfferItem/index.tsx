import Tag from '../X4_Tag'
import * as S from './styles'

import efoodStar from '../../assets/images/EFOOD_ESTRELA.png'

type Props = {
  id: number
  image: string
  title: string
  description: string
  category: number
  infos: string[]
}

const OfferItem = ({
  id,
  image,
  title,
  description,
  category,
  infos
}: Props) => {
  const getDescription = (description: string) => {
    if (description.length < 286) {
      return description + ' Definitivamente uma opcão!'
    }
    return description
  }

  return (
    <S.Card>
      <S.CardImage>
        <img src={image} alt={title} />
      </S.CardImage>
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
        <S.Descricao>{getDescription(description)}</S.Descricao>
        <S.Button href={`/menu/${id}`}>Saiba mais</S.Button>
      </S.CardText>
    </S.Card>
  )
}

export default OfferItem
