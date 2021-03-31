import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonGeralProps } from '.'

type WrapperProps = Pick<ButtonGeralProps, 'styleButton'>

const WrapperModifiers = {
  fill: (theme: DefaultTheme) => css`
    border: none;
    box-shadow: ${theme.border.shadows.buttons};

    background-size: 200%;
    background: ${theme.colors.gradients.primary};

    :hover {
      color: rgba(255, 255, 255, 0.7);
      box-shadow: ${theme.border.shadows.buttonsHover};
    }
  `,
  outline: (theme: DefaultTheme) => css`
    border: ${theme.colors.bg} 2px solid;

    background: none;

    :hover {
      color: ${theme.colors.secondary};
      border: ${theme.colors.secondary} 2px solid;
    }
  `
}

export const Wrapper = styled.a<WrapperProps>`
  ${({ theme, styleButton }) => css`
    padding: ${theme.spacings.xxsmall} ${theme.spacings.small};

    border-radius: ${theme.border.radiusButton};

    font-size: ${theme.sizes.xsmall};
    font-weight: ${theme.font.weight.weight3};
    text-transform: uppercase;
    color: ${theme.colors.bg};

    cursor: pointer;

    transition: 0.3s all ease-in-out;

    ${!!styleButton && WrapperModifiers[styleButton](theme)}
  `}
`
