import styled from 'styled-components'
import { Cores } from '../../styles'

export const Card = styled.div`
  background-color: ${Cores.corSalmao};
  border: 4px solid ${Cores.corSalmao};
  max-width: 350px;
  position: relative;
  margin-bottom: 32px;
`

export const CardImage = styled.div`
  width: 100%;
  max-width: 350px;
  height: 165px;
  overflow: hidden;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`

export const CardText = styled.div`
  padding: 12px 8px;
  widht: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 12px;
  color: ${Cores.corAreia};
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-bottom: 16px;
  color: ${Cores.corAreia};
`

export const Button = styled.a`
  background-color: ${Cores.corAreia};
  color: ${Cores.corSalmao};
  width: 100%;
  padding: 4px 8px;
  border: none;
  text-decoration: none;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
`
