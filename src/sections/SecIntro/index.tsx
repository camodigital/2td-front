import * as S from './styles'

import TheContainer from 'components/TheContainer'
import HeroHome from 'components/HeroHome'
import VideoBg from 'components/VideoBg'
import IcoArrowDown from 'icons/IcoArrowDown'

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
      <a href="#servicos">
        <div className="text">scroll</div>
        <div className="ico">
          <IcoArrowDown />
        </div>
      </a>
    </S.Scroll>
  </S.Wrapper>
)

export default SecIntro
