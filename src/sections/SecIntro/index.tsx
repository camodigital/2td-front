import * as S from './styles'

import TheContainer from 'components/TheContainer'
import HeroHome from 'components/HeroHome'
import VideoBg from 'components/VideoBg'
import ScrollNext from 'components/ScrollNext'

export type SecIntroProps = {
  introPretitle: string
  introTitle: string
  IntroText: string
}

const SecIntro = ({ introPretitle, introTitle, IntroText }: SecIntroProps) => (
  <S.Wrapper>
    <TheContainer size="right">
      <S.Hero>
        <HeroHome
          pretitle={introPretitle}
          title={introTitle}
          text={IntroText}
        />
      </S.Hero>
      <S.Video>
        <VideoBg />
      </S.Video>
    </TheContainer>

    <S.Scroll>
      <ScrollNext />
    </S.Scroll>
  </S.Wrapper>
)

export default SecIntro
