import { Link } from 'react-router-dom'

import * as S from './styles'
import efoodLogo from '../../assets/images/EFOOD_LOGO.svg'
import efoodFacebook from '../../assets/images/EFOOD_FACEBOOK.png'
import efoodTwitter from '../../assets/images/EFOOD_TWITTER.png'
import efoodInstagram from '../../assets/images/EFOOD_INSTAGRAM.png'

const Footer = () => (
  <S.Footer>
    <S.FooterBox className="container">
      <S.FooterSubBox>
        <Link to="/">
          <img src={efoodLogo} alt="EFOOD" />
        </Link>
        <S.Links>
          <li>
            <S.Link href="#">
              <img src={efoodFacebook} alt="Facebook" />
            </S.Link>
          </li>
          <li>
            <S.Link href="#">
              <img src={efoodInstagram} alt="Instagram" />
            </S.Link>
          </li>
          <li>
            <S.Link href="#">
              <img src={efoodTwitter} alt="Twitter" />
            </S.Link>
          </li>
        </S.Links>
      </S.FooterSubBox>
      <S.Disclamer>
        <p>
          A EFOOD é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </p>
      </S.Disclamer>
    </S.FooterBox>
  </S.Footer>
)

export default Footer
