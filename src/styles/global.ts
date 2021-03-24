import { createGlobalStyle, css } from 'styled-components'
import { normalize } from 'styled-normalize'

import media from 'styled-media-query'

const GlobalStyles = createGlobalStyle`
  ${normalize}

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local(''),
        url('/fonts/montserrat-v15-latin-regular.woff2') format('woff2')
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: italic;
    font-weight: 500;
    font-display: swap;
    src: local(''),
        url('/fonts/montserrat-v15-latin-500italic.woff2') format('woff2')
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local(''),
        url('/fonts/montserrat-v15-latin-600.woff2') format('woff2')
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local(''),
        url('/fonts/montserrat-v15-latin-700.woff2') format('woff2')
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 800;
    font-display: swap;
    src: local(''),
        url('/fonts/montserrat-v15-latin-800.woff2') format('woff2')
  }

  * {
    margin: 0;
    padding: 0;

    box-sizing: border-box;

    outline: none;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html, body, #__next {
    height: 100%;
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.sizes.xsmall};
      line-height: 150%;
      color: ${theme.colors.text};

      background-color: ${theme.colors.bg};

      ${media.greaterThan('medium')`
        font-size: ${theme.sizes.medium};
      `}
    }
  `}
`

export default GlobalStyles
