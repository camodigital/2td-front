import styled, { css } from 'styled-components'
import { LogoProps } from '.'

export const Wrapper = styled.div<LogoProps>`
  ${({ theme, color1, color2 }) => css`
    svg {
      width: 100%;
      path {
        :nth-child(1) {
          fill: ${theme.colors[color1!]};

          transition: 0.5s;
        }
        :nth-child(2) {
          fill: ${theme.colors[color2!]};
        }
      }
    }

    :hover {
      svg {
        path {
          :nth-child(1) {
            fill: ${theme.colors.sucess};
          }
        }
      }
    }
  `}
`
