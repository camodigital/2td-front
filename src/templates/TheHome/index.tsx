import * as S from './styles'

import SecIntro from 'sections/SecIntro'
import SecProducts from 'sections/SecProducts'
import SecAbout from 'sections/SecAbout'

const TheHome = () => (
  <S.Wrapper>
    <SecIntro />
    <SecProducts />
    <SecAbout />
  </S.Wrapper>
)

export default TheHome
