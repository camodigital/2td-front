import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  position: relative;

  background-color: white;
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

export const Content = styled.div``

export const Map = styled.div`
  display: none;
`

export const Form = styled.div``
