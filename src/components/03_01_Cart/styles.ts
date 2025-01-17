import styled from 'styled-components'
import { Cores } from '../../styles'

import lixeira from '../../assets/images/ICONE_LIXEIRA.png'

export const CartOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${Cores.corPreto};
  opacity: 0.7;
  cursor: pointer;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const CartSidebar = styled.aside`
  background-color: ${Cores.corSalmao};
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;
`

export const CartItem = styled.li`
  display: flex;
  position: relative;
  width: 100%;
  height: 100px;
  background-color: ${Cores.corAreia};
  padding: 10px 8px;
  margin-bottom: 16px;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    color: ${Cores.corSalmao};
    font-weight: bold;
    font-size: 18px;
  }

  span {
    display: block;
    color: ${Cores.corSalmao};
    font-size: 14px;
    margin-top: 16px;
  }

  button {
    background-image: url(${lixeira});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`

export const CartPrices = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${Cores.corAreia};
  margin-top: 24px;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    display: block;
  }
`

export const CartMessage = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${Cores.corAreia};
  margin-top: 24px;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    display: block;
    text-align: center;
  }
`

export const CartDataInput = styled.div`
  font-weight: bold;
  font-size: 14px;
  color: ${Cores.corAreia};
  margin-top: 24px;
  margin-bottom: 24px;
  display: block;

  h2 {
    font-size: 16px;
    margin-bottom: 16px;
  }

  .DataArea {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 34px;
  }

  .DataField {
    width: 100%;
    margin-bottom: 8px;

    span {
      display: block;
      margin-bottom: 8px;
    }

    input {
      width: 100%;
      padding: 8px;
      box-sizing: border-box;
      background-color: ${Cores.corAreia};
      color: ${Cores.corCinza};
      border: none;
      outline: none;

      &:focus {
        background-color: ${Cores.corAreia};
        outline: none;
        box-shadow: none;
      }

      &.error {
        background-color: ${Cores.corPreto};
      }
    }
  }

  .DataField.WidFix input {
    width: 228px; /* Sobrescreve o width: 100% */
  }

  p {
    font-size: 14px;
    font-weight: 300;
    line-height: 22px;
    margin-bottom: 8px;
  }
`

export const CartButton = styled.button`
  background-color: ${Cores.corAreia};
  width: 100%;
  height: auto;
  padding: 4px 4px;
  border: 1px solid;
  font-size: 16px;
  color: ${Cores.corSalmao};
  font-weight: bold;
  margin-bottom: 8px;
`

export const ErrorMessage = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${Cores.corAreia};
  margin-top: 24px;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LoadingMessage = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${Cores.corAreia};
  margin-top: 24px;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
