import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  position: relative;

  ${media.greaterThan('large')`
    .theContainer{
      display: grid;
      grid-template-columns: 40% 60%;
      grid-template-rows: 1fr;
    }
  `}

  ${media.greaterThan('huge')`
    padding: 10rem 0;
  `}
`

export const BGVerde = styled.div`
  width: 80%;

  position: absolute;

  ${media.greaterThan('medium')`

    width: 20%;
  `}
`

export const Box = styled.div``

export const Header = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.medium};

    text-align: center;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.medium};

    position: relative;

    border-radius: 0.4rem;

    background: rgba(250, 250, 250, 0.9);
  `}
`

export const Text = styled.div``

export const Partnerships = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.medium};

    .title {
      margin-bottom: ${theme.spacings.xsmall};
    }

    .itens {
      display: flex;

      li {
        padding: ${theme.spacings.xxxsmall};

        img {
          height: ${theme.sizes.small};
        }

        ${media.greaterThan('large')`
          padding: ${theme.spacings.small};

          img {
            height: ${theme.sizes.xlarge};
          }
        `}
      }
    }
  `}
`

export const Button = styled.div``

export const Phone = styled.div``
