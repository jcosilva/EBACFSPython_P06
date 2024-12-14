import styled from 'styled-components'
import { Cores } from '../../styles'

export const Footer = styled.footer`
  width: 100%;
  height: 296px;
  background-color: ${Cores.corBege};
`

export const FooterBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 40px 0;
  height: 100%;
`

export const FooterSubBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  height: 100%;
`

export const Links = styled.ul`
  display: flex;
  margin-top: 32px;
`

export const Link = styled.a`
  text-decoration: none;
  margin-right: 8px;

  img {
    height: 24px;
  }
`

export const Disclamer = styled.div`
  font-size: 10px;
  color: ${Cores.corSalmao};
  max-width: 480px;
  text-align: center;

  p {
    text-align: center;
  }
`
