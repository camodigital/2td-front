import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  position: relative;

  .theContainer {
    height: 100vh;
  }
`

export const BG = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
  z-index: -1;
  overflow: hidden;

  svg {
    position: absolute;
    top: 0;
    left: 0;

    transform-origin: bottom 50%;
    transform: scale(1) translateX(50%) translateY(-50%);

    ${media.greaterThan('large')`
      transform: scale(1) translateX(60%) translateY(-50%);
    `}
  }
`

export const Box = styled.div`
  height: 100%;
  padding: 10rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${media.greaterThan('large')`
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 1fr;
  `}
`

export const Content = styled.div``

export const Header = styled.div`
  margin-bottom: 3rem;
`

export const Title = styled.div`
  p {
    margin-bottom: 3rem;
  }
`

export const Subtitle = styled.div``

export const Text = styled.div`
  ${media.greaterThan('medium')`
    max-width: 32rem;
  `}

  ${media.greaterThan('large')`
    max-width: 38rem;
  `}

  ${media.greaterThan('huge')`
    max-width: 47rem;
  `}
`

export const Photos = styled.div`
  ${({ theme }) => css`
    display: none;

    ${media.greaterThan('large')`
      width: 100%;
      height: 100%;

      display: block;

      position: relative;

      .photo {
        width: 30rem;
        height: 50rem;

        position: absolute;
        top: 50%;
        left: 0%;

        box-shadow: ${theme.shadows.tinyShadow};

        overflow: hidden;

        :nth-child(1) {
          transform: translateX(0%) translateY(-50%);
          z-index: 2;
        }

        :nth-child(2) {
          transform: translateX(30%) translateY(-45%);
          z-index: 1;
        }
      }
    `}
  `}
`

export const Scroll = styled.div`
  ${({ theme }) => css`
    position: absolute;
    bottom: 5rem;

    a {
      text-decoration: none;
      color: ${theme.colors.secondary};

      transition: 0.5s;

      :hover {
        color: ${theme.colors.primary};

        svg {
          path {
            fill: ${theme.colors.primary};
          }
        }
      }
    }
    .text {
      width: 100px;

      transform: rotate(90deg) translateX(1rem);
    }

    .ico {
      width: 2rem;
      transform: translateX(4rem);

      svg {
        path {
          transition: 0.5s;
        }
      }
      animation: 1s ease-in 1s infinite reverse both running slidein;
    }

    @keyframes slidein {
      from {
        transform: translateY(0) translateX(4rem);
      }
      to {
        transform: translateY(0.5rem) translateX(4rem);
      }
    }
  `}
`
