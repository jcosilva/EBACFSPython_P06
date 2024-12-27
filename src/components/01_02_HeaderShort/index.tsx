import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { Link } from 'react-router-dom'
import { open } from '../../store/reducers/cart'

import * as S from './styles'
import efoodLogo from '../../assets/images/EFOOD_LOGO.svg'
import efoodFundoHeader from '../../assets/images/EFOOD_FUNDO_HEADER.png'

const HeaderShort = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.Header style={{ backgroundImage: `url(${efoodFundoHeader})` }}>
      <S.HeaderBox className="container">
        <S.HeaderText>
          <Link to="/">Restaurantes</Link>
        </S.HeaderText>
        <Link to="/">
          <img src={efoodLogo} alt="EFOOD" />
        </Link>
        <S.HeaderText onClick={openCart}>
          {items.length} item(s) no carrinho
        </S.HeaderText>
      </S.HeaderBox>
    </S.Header>
  )
}

export default HeaderShort
