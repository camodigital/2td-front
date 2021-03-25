import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;

  position: relative;

  overflow-x: hidden;

  ${media.greaterThan('medium')`
    .theContainer {
      height: 100vh;

      display: grid;
      grid-template-columns: 80% 1fr;
      grid-template-rows: 1fr;
    }
  `}
`

export const Hero = styled.div`
  ${media.greaterThan('medium')`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `}
`

export const Video = styled.div``
