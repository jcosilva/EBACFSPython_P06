import * as S from './styles'
import { Restaurant } from '../../pages/01_Home'

export type Props = {
  offer: Restaurant
}

const Banner = ({ offer }: Props) => {
  return (
    <S.Imagem style={{ backgroundImage: `url(${offer.capa})` }}>
      <div className="container">
        <S.Tipo>{offer.tipo}</S.Tipo>
        <S.Titulo>{offer.titulo}</S.Titulo>
      </div>
    </S.Imagem>
  )
}

export default Banner
