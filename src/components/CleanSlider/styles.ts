import styled, { css } from 'styled-components'

import { ICarouselSlide, ICarouselProps } from '.'

export const Wrapper = styled.div`
  width: 100%;

  position: relative;
`
export const Quot = styled.div`
  position: absolute;
  top: -5rem;

  svg {
    width: 8rem;
  }
`

export const Carousel = styled.div``

export const CarouselSlides = styled.div<ICarouselProps>`
  display: flex;

  ${(props) =>
    props.currentSlide &&
    css`
      transform: translateX(-${props.currentSlide * 100}%);
    `};
  transition: all 1s ease-in-out;
`

export const CarouselSlide = styled.div<ICarouselSlide>`
  opacity: ${(props) => (props.active ? 1 : 0)};
  width: 100%;

  flex: 0 0 auto;

  transition: all 0.5s ease;
`

export const ButtonContainer = styled.div`
  position: absolute;
  top: 40%;
  transform: translateY(-50%);

  cursor: pointer;

  &.left {
    left: 0;
    transform: translateX(-3rem);
  }

  &.right {
    right: 0;
    transform: translateX(3rem);
  }
`

export const Button = styled.div`
  ${({ theme }) => css`
    width: 50px;
    height: 50px;

    display: flex;
    justify-content: center;
    align-items: center;

    border: none;
    border-radius: 50%;

    box-shadow: ${theme.shadows.littleShadow};
    background: ${theme.colors.gradients.primary};

    svg {
      width: 0.8rem;
    }
  `}
`
