import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.weight.weight3};
    color: ${theme.colors.secondary};
    line-height: ${theme.font.lineHeight.default};

    strong {
      font-weight: ${theme.font.weight.weight3};
      color: ${theme.colors.primary};
    }

    ${media.greaterThan('small')`
      font-size: ${theme.font.sizes.xxlarge};
    `}

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxxlarge};
    `}
  `}
`
