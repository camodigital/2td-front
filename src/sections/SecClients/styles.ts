import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small} 0;

    position: relative;

    overflow: hidden;

    background-color: ${theme.colors.bg};

    ${media.greaterThan('large')`
      background-color: transparent;
    `}

    ${media.greaterThan('huge')`
      padding: 10rem 0;
    `}
  `}
`

export const Header = styled.header`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.medium};

    text-align: center;

    ${media.greaterThan('large')`
      margin-bottom: ${theme.spacings.xxxlarge};
    `}
  `}
`

export const Title = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`

export const Subtitle = styled.div``

export const Content = styled.div``

export const Testimony = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xxxlarge};

    ${media.greaterThan('large')`
      max-width: 70rem;
      margin: 8rem auto;
    `}
  `}
`

export const Clients = styled.ul`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;

    li {
      padding: ${theme.spacings.xxsmall};

      img {
        width: auto;
        height: ${theme.sizes.xxlarge};

        ${media.greaterThan('large')`
          height: ${theme.sizes.xxxlarge};
        `}
      }
    }
  `}
`
