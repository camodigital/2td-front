import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  max-width: 26rem;

  ${media.greaterThan('medium')`
    max-width: 38rem;
  `}

  ${media.greaterThan('large')`
    max-width: 46rem;
  `}

  ${media.greaterThan('huge')`
    max-width: 52rem;
  `}

  @media (min-width: 2500px) {
    max-width: 90rem;
  }
`
export const PreTitle = styled.div``
export const Title = styled.div``
export const Text = styled.div`
  ${media.greaterThan('huge')`
    max-width: 50rem;
  `}

  @media (min-width: 2500px) {
    max-width: 60rem;
  }
`
export const Button = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};
  `}
`
