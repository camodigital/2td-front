import styled, { DefaultTheme, css } from 'styled-components'
import { TheContainerProps } from '.'

const wrapperModifiers = {
  full: (theme: DefaultTheme) => css`
    width: 100%;
    min-height: 50px;
    padding: ${theme.spacings.medium};
  `,
  medium: (theme: DefaultTheme) => css`
    width: 100%;
    min-height: 50px;
    max-width: ${theme.sizes.containerMedium};
    margin: 0 auto;
    padding: ${theme.spacings.medium};
  `,
  right: (theme: DefaultTheme) => css`
    width: 100%;
    min-height: 50px;
    max-width: ${theme.sizes.containerMedium};
    margin: 0 0 0 auto;
    padding: ${theme.spacings.medium};
  `
}

export const Wrapper = styled.div<TheContainerProps>`
  ${({ theme, size }) => css`
    ${!!size && wrapperModifiers[size](theme)}
  `}
`
