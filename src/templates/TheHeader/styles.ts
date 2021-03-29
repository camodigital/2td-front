import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    width: 100%;

    position: fixed;
    top: 0;
    left: 0;
    z-index: ${theme.layers.menu};

    transition: 0.5s ease-in-out;

    &.scrolling {
      box-shadow: ${theme.shadows.littleShadow};
      background-color: ${theme.colors.bg};

      .theContainer {
        padding-top: 0;
        padding-bottom: 0;
      }

      .social-links {
        svg {
          path {
            fill: ${theme.colors.secondary};
          }
        }
      }
    }
  `}
`
