import { useState, useEffect } from 'react'

import * as S from './styles'

import MediaMatch from 'components/MediaMatch'

const VideoBg = () => {
  const [boxSize, setBoxSize] = useState('')
  const videoSource = 'images/bg-video-large.mp4'

  useEffect(() => {
    const halfSize = window.innerWidth / 2 + 'px'

    setBoxSize(halfSize)

    window.addEventListener('resize', function () {
      const halfSize = window.innerWidth / 2 + 'px'

      setBoxSize(halfSize)
    })

    return () => {
      boxSize
    }
  }, [boxSize])

  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium">
        <S.VideoSmall>
          <S.VideoSmallContainer>
            <video autoPlay loop muted poster="images/bg-video.jpg">
              <source src={videoSource} />
            </video>
          </S.VideoSmallContainer>
        </S.VideoSmall>
      </MediaMatch>

      <MediaMatch greaterThan="medium">
        <S.VideoMedium>
          <S.VideoMediumContainer>
            <S.VideoMediumContent>
              <video autoPlay loop muted poster="images/bg-video.jpg">
                <source src={videoSource} />
              </video>
            </S.VideoMediumContent>
          </S.VideoMediumContainer>
        </S.VideoMedium>
      </MediaMatch>

      <MediaMatch greaterThan="huge">
        <S.VideoMedium></S.VideoMedium>
      </MediaMatch>
    </S.Wrapper>
  )
}

export default VideoBg
