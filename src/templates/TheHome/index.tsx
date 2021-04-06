import * as S from './styles'

import SecIntro from 'sections/SecIntro'
import SecServices from 'sections/SecServices'
import SecAbout from 'sections/SecAbout'
import SecClients from 'sections/SecClients'
import SecContact from 'sections/SecContact'
import VideoBgMask from 'components/VideoBgMask'
import HideInMedia from 'components/HideInMedia'

export type TheHomeProps = {
  // intro
  introPretitle: string
  introTitle: string
  introText: string
  // services
  servicesTitle: string
  servicesSubtitle: string
  servicesItemIcon1: string
  servicesItemTitle1: string
  servicesItemText1: string
  servicesItemPhoto1: string
  servicesItemIcon2: string
  servicesItemTitle2: string
  servicesItemText2: string
  servicesItemPhoto2: string
  servicesItemIcon3: string
  servicesItemTitle3: string
  servicesItemText3: string
  servicesItemPhoto3: string
  // about
  aboutTitle: string
  aboutText: string
  aboutPartnerships: [{ url: string; width: string; height: string }]
  // clients
  clientsTitle: string
  clientsSubtitle: string
  clientsTestimony: [
    { titulo: string; texto: { html: string }; nome: string; cargo: string }
  ]
  clientsLogos: [{ url: string; width: string; height: string }]
  // contato
  contactTitle: string
  contactSubtitle: string
  contactTelefone: string
  contactEmail: string
  contactLongitude: number
  contactLatitude: number
}

const TheHome = ({
  introPretitle,
  introTitle,
  introText,
  // services
  servicesTitle,
  servicesSubtitle,
  servicesItemIcon1,
  servicesItemTitle1,
  servicesItemText1,
  servicesItemPhoto1,
  servicesItemIcon2,
  servicesItemTitle2,
  servicesItemText2,
  servicesItemPhoto2,
  servicesItemIcon3,
  servicesItemTitle3,
  servicesItemText3,
  servicesItemPhoto3,
  // about
  aboutTitle,
  aboutText,
  aboutPartnerships,
  // clients
  clientsTitle,
  clientsSubtitle,
  clientsTestimony,
  clientsLogos,
  // contato
  contactTitle,
  contactSubtitle,
  contactTelefone,
  contactEmail,
  contactLongitude,
  contactLatitude
}: TheHomeProps) => (
  <S.Wrapper className="page">
    <section className="section">
      <SecIntro
        introPretitle={introPretitle}
        introTitle={introTitle}
        IntroText={introText}
      />
    </section>

    <section className="section">
      <HideInMedia size="large">
        <VideoBgMask />
      </HideInMedia>
    </section>

    <section className="section" id="nextSec">
      <SecServices
        servicesTitle={servicesTitle}
        servicesSubtitle={servicesSubtitle}
        servicesItemIcon1={servicesItemIcon1}
        servicesItemTitle1={servicesItemTitle1}
        servicesItemText1={servicesItemText1}
        servicesItemPhoto1={servicesItemPhoto1}
        servicesItemIcon2={servicesItemIcon2}
        servicesItemTitle2={servicesItemTitle2}
        servicesItemText2={servicesItemText2}
        servicesItemPhoto2={servicesItemPhoto2}
        servicesItemIcon3={servicesItemIcon3}
        servicesItemTitle3={servicesItemTitle3}
        servicesItemText3={servicesItemText3}
        servicesItemPhoto3={servicesItemPhoto3}
      />
    </section>

    <section className="section section-about">
      <SecAbout
        aboutTitle={aboutTitle}
        aboutText={aboutText}
        aboutPartnerships={aboutPartnerships}
      />
    </section>

    <section className="section">
      <SecClients
        clientsTitle={clientsTitle}
        clientsSubtitle={clientsSubtitle}
        clientsTestimony={clientsTestimony}
        clientsLogos={clientsLogos}
      />
    </section>

    <section className="section">
      <SecContact
        title={contactTitle}
        subtitle={contactSubtitle}
        telefone={contactTelefone}
        email={contactEmail}
        latitude={contactLongitude}
        longitude={contactLatitude}
      />
    </section>
  </S.Wrapper>
)

export default TheHome
