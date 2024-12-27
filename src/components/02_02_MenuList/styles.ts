import styled from 'styled-components'
import { breakpoints, Cores } from '../../styles'
import { Card } from '../X2_OfferItem/styles'

export const Container = styled.section`
  padding: 32px 0;
  background-color: ${Cores.corAreia};

  ${Card} {
    background-color: ${Cores.corSalmao};
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 24px;
  margin-top: 40px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`
export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`

export const Action = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.73);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.5s ease;
`

export const Item = styled.li`
  margin-right: 16px;
  position: relative;

  > img {
    border: 2px solid ${Cores.corBranco};
    border-radius: 8px;
    width: 150px;
    height: 150px;
    object-fit: cover;
  }

  &:hover {
    ${Action} {
      opacity: 1;
      transition: opacity 0.5s ease;
    }
  }
`

export const Modal = styled.div<{ $isvisible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: ${({ $isvisible }) => ($isvisible ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.73);

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

export const ModalBox = styled.div`
  display: flex;
  position: relative;
  width: 1024px;
  background-color: ${Cores.corSalmao};
  padding: 16px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  z-index: 2;
`

export const ModalClose = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;

  > img {
    cursor: pointer;
    width: 16px;
    height: 16px;
  }
`

export const ModalImage = styled.div`
  flex: 0 0 280px;
  height: 280px;
  overflow: hidden;
  margin-right: 16px;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const ModalText = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  color: ${Cores.corBranco};

  h4 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    margin-bottom: 16px;
    line-height: 22px;
  }
`

export const ModalButton = styled.button`
  width: 220px;
  height: 24px;
  font-size: 14px;
  font-weight: bold;
  color: ${Cores.corSalmao};
  border: 1px solid;
  cursor: pointer;
`
