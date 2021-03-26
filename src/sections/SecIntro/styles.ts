import styled, { css } from 'styled-components'
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
      grid-template-columns: 50% 1fr;
      grid-template-rows: 1fr;
    }
  `}
`

export const Hero = styled.div`
  ${({ theme }) => css`
  padding-top: ${theme.spacings.large}

  position: relative;

  ${media.greaterThan('medium')`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `}
 `}
`

export const Video = styled.div`
  width: 100%;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
`
