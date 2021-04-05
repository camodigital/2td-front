import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxlarge};

    border-radius: 0.4rem;

    box-shadow: ${theme.shadows.bigShadow};
  `}
`

export const Content = styled.div`
  width: 100%;
`

export const Title = styled.div`
  ${({ theme }) => css`
    max-width: 80%;
    margin: 0 auto ${theme.spacings.medium} auto;

    text-align: center;

    h4 {
      font-size: 3rem;
      color: ${theme.colors.primary};
    }
  `}
`

export const Text = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.medium};
  `}
`

export const Name = styled.div`
  ${({ theme }) => css`
    font-weight: ${theme.font.weight.weight3};

    .role {
      font-weight: ${theme.font.weight.weight1};
    }
  `}
`
