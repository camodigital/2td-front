import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.sizes.large};
    font-weight: ${theme.font.weight.weight3};
    color: ${theme.colors.secondary};
    line-height: ${theme.font.lineHeight.default};

    strong {
      font-weight: ${theme.font.weight.weight3};
      color: ${theme.colors.primary};
    }

    ${media.greaterThan('small')`
      font-size: ${theme.sizes.xlarge};
    `}

    ${media.greaterThan('medium')`
      font-size: ${theme.sizes.xxlarge};
    `}
  `}
`
