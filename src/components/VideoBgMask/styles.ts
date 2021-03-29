import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const Video = styled.div`
  position: absolute;
  bottom: -10%;
  right: -76%;

  transition: 0.5s;

  @media (min-width: 1220px) {
    right: -70%;
  }

  @media (min-width: 1240px) {
    right: -70%;
  }

  @media (min-width: 1260px) {
    right: -64%;
  }

  @media (min-width: 1300px) {
    right: -64%;
  }

  @media (min-width: 1320px) {
    right: -60%;
  }

  @media (min-width: 1350px) {
    right: -60%;
  }

  @media (min-width: 1400px) {
    right: -60%;
  }

  @media (min-width: 1450px) {
    right: -55%;
  }

  @media (min-width: 1500px) {
    right: -52%;
  }

  @media (min-width: 1550px) {
    right: -47%;
  }

  @media (min-width: 1600px) {
    right: -42%;
  }

  @media (min-width: 1700px) {
    right: -50%;
    bottom: -15%;
  }

  @media (min-width: 1800px) {
    right: -45%;
    bottom: -15%;
  }

  @media (min-width: 1900px) {
    right: -35%;
    bottom: -15%;
  }

  @media (min-width: 2100px) {
    right: -25%;
    bottom: -15%;
  }

  @media (min-width: 2500px) {
    right: -25%;
    bottom: -15%;
  }

  @media (min-height: 600px) {
    bottom: -35%;
  }

  @media (min-height: 700px) {
    bottom: -27%;
  }

  @media (min-height: 768px) {
    bottom: -18%;
  }

  @media (min-height: 800px) {
    bottom: -15%;
  }

  @media (min-height: 850px) {
    bottom: -13%;
  }

  @media (min-height: 900px) {
    bottom: -9%;
  }

  @media (min-height: 940px) {
    bottom: -10%;
  }
`

export const Box = styled.div`
  ${({ theme }) => css`
    width: 110rem;
    height: 110rem;

    position: relative;

    border-radius: 6rem;

    overflow: hidden;

    transform: rotate(-45deg);

    ::after {
      content: '';

      width: 100%;
      height: 100%;

      position: absolute;
      top: 0;
      left: 0;

      background: ${theme.colors.gradients.darkAlpha};
    }

    @media (min-width: 1700px) {
      width: 130rem;
      height: 130rem;
    }
  `}
`

export const Content = styled.div`
  video {
    width: 100%;
    height: 100%;
  }
`
