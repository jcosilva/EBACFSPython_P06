import { createGlobalStyle } from 'styled-components'

export const Cores = {
  corAreia: '#FFF8F2',
  corBege: '#FFEBD9',
  corBranco: '#FFFFFF',
  corSalmao: '#E66767',
  corPreto: '#000000'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${Cores.corAreia};
    color: ${Cores.corSalmao};
    padding: 24px 0;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 80%;
    }
  }
`
