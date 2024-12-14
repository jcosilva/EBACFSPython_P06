import { Link } from 'react-router-dom'

import * as S from './styles'
import efoodLogo from '../../assets/images/EFOOD_LOGO.svg'
import efoodFundoHeader from '../../assets/images/EFOOD_FUNDO_HEADER.png'

const Header = () => (
  <S.Header style={{ backgroundImage: `url(${efoodFundoHeader})` }}>
    <S.HeaderBox className="container">
      <Link to="/">
        <img src={efoodLogo} alt="EFOOD" />
      </Link>
      <S.Slogan>
        <p>Viva experiência gastronômicas no conforto da sua casa</p>
      </S.Slogan>
    </S.HeaderBox>
  </S.Header>
)

export default Header
