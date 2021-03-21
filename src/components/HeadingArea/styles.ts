import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.weight.weight5};
    letter-spacing: ${theme.font.letterSpace.small};
    color: ${theme.colors.secondary};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.small};
    `}
  `}
`
