import * as S from './styles'

import TheContainer from 'components/TheContainer'
import HeroHome from 'components/HeroHome'
import VideoBg from 'components/VideoBg'

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
  </S.Wrapper>
)

export default SecIntro
