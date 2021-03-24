import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  max-width: 26rem;

  ${media.greaterThan('medium')`
    max-width: 56rem;;
  `}
`
export const PreTitle = styled.div``
export const Title = styled.div``
export const Text = styled.div``
export const Button = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};
  `}
`
