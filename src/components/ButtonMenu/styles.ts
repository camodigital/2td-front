import styled, { css } from 'styled-components'
import { ButtonMenuProps } from '.'

export const Wrapper = styled.a<ButtonMenuProps>`
  ${({ theme, color }) => css`
    display: inline-block;
    padding: 1rem 2rem;

    position: relative;

    overflow: hidden;

    font-size: 1.2rem;
    font-weight: ${theme.font.weight.weight3};
    text-transform: uppercase;
    color: ${theme.colors[color]};

    border: 0.2rem solid ${theme.colors[color]};
    border-radius: 4rem;

    cursor: pointer;

    :visited {
      color: ${theme.colors[color]};
    }

    :hover {
      ${Content} {
        transform: translateY(-4rem);
      }

      ${ContentHover} {
        transform: translateY(-1rem);
      }
    }
  `}
`
export const Content = styled.div<ButtonMenuProps>`
  ${({ theme, color }) => css`
    transform: translateY(0);
    transition: 0.7s ease-in-out;

    color: ${theme.colors[color]};
  `}
`
export const ContentHover = styled.div<ButtonMenuProps>`
  ${({ theme, color }) => css`
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    left: 0;

    transform: translateY(5rem);
    transition: 0.7s ease-in-out;

    color: ${theme.colors[color]};

    span {
      animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite
        alternate;

      svg {
        width: 1rem;

        path {
          fill: ${theme.colors[color]};
        }
      }
    }

    @keyframes slide-top {
      0% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(-1rem);
      }
    }
  `}
`
