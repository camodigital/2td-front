import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const VideoSmall = styled.div`
  ${({ theme }) => css`
    position: relative;

    video {
      height: 100vh;
      position: relative;
      z-index: -2;
    }

    ::after {
      content: '';
      width: 100%;
      height: 100%;

      position: fixed;
      top: 0;
      left: 0;
      z-index: 0;

      opacity: 0.93;
      background-color: ${theme.colors.bgLight};
    }
  `}
`

export const VideoSmallContainer = styled.div``
