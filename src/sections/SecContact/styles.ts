import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  padding: 6rem 3rem;

  position: relative;

  background-color: white;
  ${media.greaterThan(`large`)`
    padding: 0;

    display: grid;
    grid-template-columns: 60% 40%;
    grid-template-rows: 1fr;
  `}
`
export const Header = styled.div`
  margin-bottom: 4rem;

  text-align: center;
`

export const Infos = styled.div`
  width: 100%;
  max-width: 40rem;
  margin: 0 auto;

  .item {
    margin-bottom: 1rem;

    display: flex;
    .ico {
      width: 4rem;

      display: flex;
      justify-content: center;
      align-items: center;
      svg {
        height: 2rem;
      }
    }
    .text {
    }
  }

  ${media.greaterThan(`medium`)`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .item{
      width: 50%;
    }
  `}
`

export const Title = styled.div`
  margin-bottom: 1rem;
`

export const Subtitle = styled.div``

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${media.greaterThan(`large`)`
    padding: 10rem 3rem;
  `}
`

export const Map = styled.div`
  display: none;

  ${({ theme }) => css`
    ${media.greaterThan(`large`)`
      height: 100%;

      display: block;

      position: relative;

      box-shadow: ${theme.shadows.tinyShadow};
    `}
  `}
`

export const Form = styled.div`
  width: 100%;
  max-width: 40rem;
  margin: 0 auto;
`
