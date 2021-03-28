import styled, { DefaultTheme, css } from 'styled-components'
import { TheContainerProps } from '.'
import media from 'styled-media-query'

const wrapperModifiers = {
  full: (theme: DefaultTheme) => css`
    width: 100%;
    min-height: 50px;
    padding: ${theme.spacings.xsmall};

    transition: 0.5s ease-in-out;

    ${media.greaterThan('medium')`
      padding: ${theme.spacings.medium};
    `}
  `,
  medium: (theme: DefaultTheme) => css`
    width: 100%;
    min-height: 50px;
    max-width: ${theme.sizes.containerMedium};
    margin: 0 auto;
    padding: ${theme.spacings.medium};

    transition: 0.5s ease-in-out;
  `,
  right: (theme: DefaultTheme) => css`
    width: 100%;
    margin: 0 0 0 auto;
    padding-left: ${theme.spacings.medium};

    transition: 0.5s ease-in-out;

    ${media.greaterThan('medium')`
      width: 100%;
      max-width: 80%;
      margin: 0 0 0 auto;
      padding-left: ${theme.spacings.medium};
    `}
  `
}

export const Wrapper = styled.div<TheContainerProps>`
  ${({ theme, size }) => css`
    ${!!size && wrapperModifiers[size](theme)}
  `}
`
