import * as S from './styles'

import SecIntro from 'sections/SecIntro'
import SecProducts from 'sections/SecProducts'
import SecAbout from 'sections/SecAbout'
import SecClients from 'sections/SecClients'
import SecContact from 'sections/SecContact'

const TheHome = () => (
  <S.Wrapper>
    <SecIntro />
    <SecProducts />
    <SecAbout />
    <SecClients />
    <SecContact />
  </S.Wrapper>
)

export default TheHome
