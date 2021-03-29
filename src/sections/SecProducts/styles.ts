import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small} 0;

    background-color: ${theme.colors.bg};

    ${media.greaterThan('huge')`
      padding: 10rem 0;
    `}
  `}
`

export const Header = styled.header`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.medium};

    text-align: center;

    ${media.greaterThan('large')`
      margin-bottom: ${theme.spacings.xxxlarge};
    `}
  `}
`

export const Title = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`

export const Subtitle = styled.div``

export const Content = styled.div`
  ${media.greaterThan('large')`
    display: grid;
    grid-template-columns: 45% 55%;
    grid-template-rows: 1fr;
  `}
`

export const Itens = styled.ul`
  ${({ theme }) => css`
    ${media.greaterThan('huge')`
      .item{
        border-radius: .4rem;

        transition: 0.5s ease-in-out;
        &.active {
          box-shadow: ${theme.shadows.littleShadow};
        }
      }
    `}
  `}
`

export const Photo = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    position: relative;

    .mask {
      width: 50rem;
      height: 50rem;

      position: relative;
      z-index: 1;

      overflow: hidden;

      border: 0.5rem solid ${theme.colors.primary};
      border-radius: 50%;

      li {
        position: absolute;
        top: 50%;
        left: 50%;
        opacity: 0;

        transition: 1s;

        img {
          width: 200%;

          display: block;

          transform: translateX(-50%) translateY(-50%) scale(1.5);

          transition: 1s;
        }

        &.active {
          opacity: 1;

          img {
            width: 200%;

            display: block;

            transform: translateX(-50%) translateY(-50%) scale(1);
          }
        }
      }
    }

    .circle {
      width: 50rem;
      height: 50rem;

      position: absolute;

      border-radius: 50%;
      border: 1px dashed ${theme.colors.text};

      opacity: 0.4;

      :nth-child(1) {
        display: none;
      }

      :nth-child(2) {
        top: 0%;
        left: 10%;

        transform: translateX(10%) translateY(-57%);

        transform-origin: 52% 48%;

        animation: rotation 6s infinite linear;
      }

      :nth-child(3) {
        top: 0%;
        right: -5%;

        transform: translateX(-10%) translateY(-57%);

        transform-origin: 52% 48%;

        animation: rotation 6s infinite linear;
      }

      :nth-child(4) {
        top: 10%;
        left: 20%;

        transform: translateX(-40%) translateY(-40%);

        transform-origin: 52% 48%;

        animation: rotation 6s infinite linear;
      }
    }

    @keyframes rotation {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(359deg);
      }
    }
  `}
`
