import { Link } from 'react-router-dom'

import * as S from './styles'
import efoodLogo from '../../assets/images/EFOOD_LOGO.svg'
import efoodFundoHeader from '../../assets/images/EFOOD_FUNDO_HEADER.png'

const HeaderShort = () => (
  <S.Header style={{ backgroundImage: `url(${efoodFundoHeader})` }}>
    <S.HeaderBox className="container">
      <S.HeaderText>Restaurantes</S.HeaderText>
      <Link to="/">
        <img src={efoodLogo} alt="EFOOD" />
      </Link>
      <S.HeaderText>0 item(s) no carrinho</S.HeaderText>
    </S.HeaderBox>
  </S.Header>
)

export default HeaderShort
