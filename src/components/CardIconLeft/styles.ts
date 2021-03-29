import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: ${theme.spacings.small};

    display: grid;
    grid-template-columns: 4rem 1fr;
    grid-template-rows: 1fr;

    border: 1px solid ${theme.colors.textLight};

    cursor: pointer;

    transition: 0.5s;

    ${media.greaterThan('medium')`

      :hover {
        border: 0;
        border-radius: 1rem;

        box-shadow: ${theme.shadows.littleShadow};
      }

      &.active {
        border: 0;
        border-radius: 1rem;

        box-shadow: ${theme.shadows.littleShadow};
      }
    `}

    ${media.greaterThan('large')`
      border: 0;
    `}
  `}
`

export const Icon = styled.div`
  ${({ theme }) => css`
    width: ${theme.sizes.xxxlarge};
    height: ${theme.sizes.xxxlarge};

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;

    background-color: ${theme.colors.primary};

    svg {
      width: ${theme.sizes.xxlarge};
      height: ${theme.sizes.xxlarge};
    }
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall} ${theme.spacings.small};
  `}
`

export const Title = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`

export const Text = styled.div``
