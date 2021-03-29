import * as S from './styles'

import MediaMatch from 'components/MediaMatch'

const VideoBgMask = () => {
  const videoSource = 'videos/video-large.mp4'

  return (
    <S.Wrapper>
      <MediaMatch greaterThan="large">
        <S.Video>
          <S.Box>
            <S.Content>
              <video autoPlay loop muted poster="images/bg-video.jpg">
                <source src={videoSource} />
              </video>
            </S.Content>
          </S.Box>
        </S.Video>
      </MediaMatch>
    </S.Wrapper>
  )
}

export default VideoBgMask
