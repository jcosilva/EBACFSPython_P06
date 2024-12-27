import * as S from './styles'
import Product from '../X2_OfferItem'
import { Restaurant } from '../../pages/01_Home'

export type Props = {
  offerList: Restaurant[]
}

const OfferList = ({ offerList }: Props) => {
  const getRestaurantTags = (offerList: Restaurant) => {
    const tags = []
    if (offerList.destacado) {
      tags.push('Detaque da Semana')
    }
    tags.push(offerList.tipo)
    return tags
  }

  return (
    <S.Container>
      <div className="container">
        <S.List>
          {offerList.map((offer) => (
            <li key={offer.id}>
              <Product
                id={offer.id}
                image={offer.capa}
                title={offer.titulo}
                description={offer.descricao}
                category={offer.avaliacao}
                infos={getRestaurantTags(offer)}
              />
            </li>
          ))}
        </S.List>
      </div>
    </S.Container>
  )
}

export default OfferList
