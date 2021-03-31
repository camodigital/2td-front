import { useEffect, useState } from 'react'

import * as S from './styles'

import MediaMatch from 'components/MediaMatch'

const VideoBgMask = () => {
  const [videoUrl, setVideoUrl] = useState('')
  const [posterUrl, setPosterUrl] = useState('')

  useEffect(() => {
    setVideoUrl('videos/video-large.mp4')
    setPosterUrl('images/bg-video.jpg')
  }, [videoUrl, posterUrl])

  return (
    <S.Wrapper>
      <MediaMatch greaterThan="large">
        <S.Video>
          <S.Box>
            <S.Content>
              {videoUrl !== '' && (
                <video autoPlay loop muted poster={posterUrl}>
                  <source src={videoUrl} />
                </video>
              )}
            </S.Content>
          </S.Box>
        </S.Video>
      </MediaMatch>
    </S.Wrapper>
  )
}

export default VideoBgMask
