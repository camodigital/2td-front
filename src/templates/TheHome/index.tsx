import * as S from './styles'

import SecIntro from 'sections/SecIntro'
import SecProducts from 'sections/SecProducts'
import SecAbout from 'sections/SecAbout'
import SecClients from 'sections/SecClients'
import SecContact from 'sections/SecContact'
import VideoBgMask from 'components/VideoBgMask'

const TheHome = () => (
  <S.Wrapper className="page">
    <section className="section">
      <SecIntro />
    </section>

    <section className="section">
      <VideoBgMask />
    </section>

    <section className="section" id="servicos">
      <SecProducts />
    </section>

    <section className="section section-about">
      <SecAbout />
    </section>

    <section className="section">
      <SecClients />
    </section>

    <section className="section">
      <SecContact />
    </section>
  </S.Wrapper>
)

export default TheHome
