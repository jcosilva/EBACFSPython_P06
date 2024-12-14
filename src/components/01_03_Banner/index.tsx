import * as S from './styles'

import bannerImg from '../../assets/images/EFOOD_FUNDO_HEADER_MENU.png'

const Banner = () => (
  <S.Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <S.Tipo>Italiana</S.Tipo>
      <S.Titulo>La Dolce Vita Trattoria</S.Titulo>
    </div>
  </S.Imagem>
)

export default Banner
