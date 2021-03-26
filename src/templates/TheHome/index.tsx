import * as S from './styles'

import SecIntro from 'sections/SecIntro'
import SecProducts from 'sections/SecProducts'
import SecAbout from 'sections/SecAbout'
import SecClients from 'sections/SecClients'

const TheHome = () => (
  <S.Wrapper>
    <SecIntro />
    <SecProducts />
    <SecAbout />
    <SecClients />
  </S.Wrapper>
)

export default TheHome
