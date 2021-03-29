import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  position: relative;

  background-color: white;
  ${media.greaterThan(`large`)`
    display: grid;
    grid-template-columns: 60% 40%;
    grid-template-rows: 1fr;
  `}
`
export const Header = styled.div`
  margin-bottom: 3rem;

  text-align: center;
`

export const Infos = styled.div`
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
    display: flex;
    justify-content: center;

    .item{
      width: 50%;
    }
  `}
`

export const Title = styled.div``

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
  ${({ theme }) => css`
    ${media.greaterThan(`large`)`
      height: 100%;
      box-shadow: ${theme.shadows.bigShadow};
    `}
  `}
`

export const Form = styled.div``
