import styled from 'styled-components'
import { Cores } from '../../styles'

export const Header = styled.header`
  width: 100%;
  height: 384px;
  background-size: cover;
`

export const HeaderBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 40px 0;
  height: 100%;
`

export const Slogan = styled.div`
  font-size: 36px;
  font-weight: bold;
  color: ${Cores.corSalmao};
  max-width: 540px;
  text-align: center;

  p {
    text-align: center;
  }
`
