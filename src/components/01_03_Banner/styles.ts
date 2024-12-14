import styled from 'styled-components'
import { Cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  color: ${Cores.corBranco};

  .container {
    position: relative;
    padding: 28px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
`

export const Tipo = styled.p`
  font-size: 32px;
  font-weight: light;
`

export const Titulo = styled.h2`
  font-size: 36px;
  font-weight: bold;
`
