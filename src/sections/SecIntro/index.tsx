import * as S from './styles'

import TheContainer from 'components/TheContainer'
import HeroHome from 'components/HeroHome'
import VideoBg from 'components/VideoBg'
import IcoArrowDown from 'icons/IcoArrowDown'

const SecIntro = () => (
  <S.Wrapper>
    <TheContainer size="right">
      <S.Hero>
        <HeroHome />
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
