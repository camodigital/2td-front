import * as S from './styles'

import SecIntro from 'sections/SecIntro'
import SecProducts from 'sections/SecProducts'
import SecAbout from 'sections/SecAbout'
import SecClients from 'sections/SecClients'
import SecContact from 'sections/SecContact'
import VideoBgMask from 'components/VideoBgMask'

const TheHome = () => (
  <S.Wrapper>
    <SecIntro />
    <VideoBgMask />
    <SecProducts />
    <SecAbout />
    <SecClients />
    <SecContact />
  </S.Wrapper>
)

export default TheHome
