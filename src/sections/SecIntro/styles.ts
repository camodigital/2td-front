import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;

  position: relative;

  overflow-x: hidden;

  ${media.greaterThan('large')`
    .theContainer {
      height: 100vh;

      display: grid;
      grid-template-columns: 50% 1fr;
      grid-template-rows: 1fr;
    }
  `}

  ${media.greaterThan('huge')`
    .theContainer {
      grid-template-columns: 60% 1fr;
    }
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

export const Hero = styled.div`
  ${({ theme }) => css`
  padding-top: ${theme.spacings.large}

  position: relative;

  ${media.greaterThan('large')`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `}
 `}
`

export const Video = styled.div`
  width: 100%;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
`
