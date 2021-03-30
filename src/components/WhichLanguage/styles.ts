import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  padding: 5rem 0;

  .theContainer {
    padding-top: 0;
    padding-bottom: 0;

    ${media.greaterThan('large')`
      display: grid;
      grid-template-columns: 30rem 1fr;
      grid-template-rows: 1fr;
      grid-gap: 3rem;
    `}
  }
`

export const Title = styled.div`
  padding-bottom: 3rem;
  ${media.greaterThan('large')`
    display: flex;
    justify-content: flex-end;
    align-items: center;
  `}
`

export const Content = styled.ul`
  li {
    padding: 2rem;

    display: inline-block;

    img {
      height: 2rem;
    }
  }
`
