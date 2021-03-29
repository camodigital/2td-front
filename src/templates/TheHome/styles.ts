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

  .section-about {
    position: relative;

    .bg-verde {
      width: 500px;
      height: 500px;

      position: absolute;
      top: 0;
      left: 0;
      z-index: 200;

      svg {
        width: 200px;
        height: 200px;
      }
    }
  }
`
