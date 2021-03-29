import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small} 0;

    background-color: ${theme.colors.bg};

    ${media.greaterThan('large')`
      height: 100vh;
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
    list-style: none;

    .item {
      margin-bottom: ${theme.spacings.medium};

      :last-child {
        margin-bottom: 0;
      }
    }
    ${media.greaterThan('large')`
    list-style: none;

    .item {
      margin-bottom: 0;

      border-top: 1px solid ${theme.colors.textLight};

      transition: .5s;

      :last-child {
        margin-bottom: 0;
        border-bottom: 1px solid ${theme.colors.textLight};
      }

      :hover{
        border: 0;
        border-radius: 1rem;

        box-shadow: ${theme.shadows.littleShadow};
      }

      &.active{
        border: 0;
        border-radius: 1rem;

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

        img {
          width: 200%;

          transform: translateX(-50%) translateY(-50%);

          display: block;
        }

        &.active {
          opacity: 1;
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
        top: 50%;
        right: 0;

        transform: translateX(10%) translateY(-57%);
      }

      :nth-child(3) {
        top: 50%;
        right: 0;

        transform: translateX(-10%) translateY(-57%);
      }

      :nth-child(4) {
        top: 50%;
        left: 50%;

        transform: translateX(-40%) translateY(-40%);
      }
    }
  `}
`
