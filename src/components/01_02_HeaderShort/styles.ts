import styled from 'styled-components'
import { Cores } from '../../styles'

export const Header = styled.header`
  width: 100%;
  height: 186px;
  background-size: cover;
`

export const HeaderBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 40px 20px;
  height: 100%;
  width: 100%;
`

export const HeaderText = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: ${Cores.corSalmao};
`
