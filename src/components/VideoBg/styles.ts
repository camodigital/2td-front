import styled from 'styled-components'

export const Wrapper = styled.div``

export const VideoSmall = styled.div`
  position: relative;
  overflow: hidden;

  :after {
    content: '';

    width: 100%;
    height: 100%;

    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;

    opacity: 0.93;
    background-color: white;
  }

  video {
    min-width: 100%;
    min-height: 100%;

    position: fixed;
    right: 0;
    bottom: 0;
    z-index: -2;
  }
`

export const VideoSmallContainer = styled.div``

// Medium
export const VideoMedium = styled.div`
  width: 85rem;
  height: 85rem;

  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;

  transform: translateX(50%);
`

export const VideoMediumContainer = styled.div`
  width: 100%;
  height: 100%;

  border-radius: 5rem;

  transform: rotate(45deg);

  overflow: hidden;

  background-color: red;
`

export const VideoMediumContent = styled.div`
  video {
    transform: scale(1.5);
  }
`

// Huge
export const VideoLarge = styled.div``
