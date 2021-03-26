import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
`

export const BGVerde = styled.div`
  width: 80%;

  position: absolute;
`

export const Header = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.medium};

    text-align: center;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.medium};
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
      }
    }
  `}
`

export const Button = styled.div``
