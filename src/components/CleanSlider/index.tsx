import IcoArrowLeft from 'icons/IcoArrowLeft'
import IcoArrowRight from 'icons/IcoArrowRight'
import IcoQuote from 'icons/IcoQuote'
import { useState } from 'react'

import * as S from './styles'

export type ICarouselProps = {
  currentSlide: number
}

export type ICarouselSlide = {
  active?: boolean
}

export type IProps = {
  children: JSX.Element[]
}

const CleanSlider = ({ children }: IProps) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const activeSlide = children.map((slide, index) => (
    <S.CarouselSlide active={currentSlide === index} key={index}>
      {slide}
    </S.CarouselSlide>
  ))

  return (
    <S.Wrapper>
      <S.Quot>
        <IcoQuote />
      </S.Quot>
      <S.Carousel>
        <S.CarouselSlides currentSlide={currentSlide}>
          {activeSlide}
        </S.CarouselSlides>
      </S.Carousel>

      <S.ButtonContainer className="left">
        <S.Button
          onClick={() => {
            setCurrentSlide(
              (currentSlide - 1 + activeSlide.length) % activeSlide.length
            )
          }}
        >
          <IcoArrowRight />
        </S.Button>
      </S.ButtonContainer>

      <S.ButtonContainer className="right">
        <S.Button
          onClick={() => {
            setCurrentSlide((currentSlide + 1) % activeSlide.length)
          }}
        >
          <IcoArrowLeft />
        </S.Button>
      </S.ButtonContainer>
    </S.Wrapper>
  )
}

export default CleanSlider
