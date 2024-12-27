import * as S from './styles'
import { Restaurant } from '../../pages/01_Home'

export type Props = {
  restaurant: Restaurant
}

const Banner = ({ restaurant }: Props) => {
  return (
    <S.Imagem style={{ backgroundImage: `url(${restaurant.capa})` }}>
      <div className="container">
        <S.Tipo>{restaurant.tipo}</S.Tipo>
        <S.Titulo>{restaurant.titulo}</S.Titulo>
      </div>
    </S.Imagem>
  )
}

export default Banner
