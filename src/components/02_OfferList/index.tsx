import * as S from './styles'
import Offer from '../../models/Offer'
import Product from '../X2_OfferItem'

export type Props = {
  offerList: Offer[]
}

const OfferList = ({ offerList }: Props) => (
  <S.Container>
    <div className="container">
      <S.List>
        {offerList.map((offer) => (
          <Product
            key={offer.key}
            image={offer.image}
            title={offer.title}
            description={offer.description}
            category={offer.category}
            infos={offer.infos}
          />
        ))}
      </S.List>
    </div>
  </S.Container>
)

export default OfferList
