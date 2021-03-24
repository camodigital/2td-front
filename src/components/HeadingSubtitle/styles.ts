import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.sizes.small};
    font-weight: ${theme.font.weight.weight1};
    color: ${theme.colors.text};

    ${media.greaterThan('medium')`
      font-size: ${theme.sizes.medium};
    `}
  `}
`
