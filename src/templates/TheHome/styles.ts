import styled from 'styled-components'

export const Wrapper = styled.div`
  .page {
    flex-basis: 50%;
    max-height: 100vh;
    overflow-y: scroll;
    border: 1px solid gray;
    scroll-snap-type: y mandatory;
    &.proximity {
      scroll-snap-type: y proximity;
    }
  }

  .section {
    scroll-snap-align: start;
  }
`
