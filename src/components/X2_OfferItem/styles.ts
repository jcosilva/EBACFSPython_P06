import styled from 'styled-components'
import { Cores } from '../../styles'
import { TagContainer } from '../X4_Tag/styles'

export const Card = styled.div`
  background-color: ${Cores.corBranco};
  border: 2px solid ${Cores.corSalmao};
  max-width: 470px;
  position: relative;

  img {
    width: 100%;
  }

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const CardText = styled.div`
  padding: 12px 8px;
`

export const TitleBox = styled.div`
  display: flex;
  align-itens: center;
  justify-content: space-between;
  margin-bottom: 12px;
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`

export const Grade = styled.h2`
  font-size: 18px;
  font-weight: bold;
  display: flex;
  align-itens: center;
  justify-content: space-between;
  margin-bottom: 12px;

  img {
    height: 20px;
    width: 20px;
    margin-left: 8px;
  }
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-bottom: 16px;
`

export const Button = styled.a`
  background-color: ${Cores.corSalmao};
  color: ${Cores.corBranco};
  padding: 4px 8px;
  border: none;
  text-decoration: none;
`
