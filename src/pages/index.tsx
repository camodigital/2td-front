import TheHeader from 'templates/TheHeader'
import TheHome, { TheHomeProps } from 'templates/TheHome'
import TheFooter from 'templates/TheFooter'
import client from 'graphql/client'
import { GET_HOME } from 'graphql/queries'

export default function Home({
  // intro
  introPretitle,
  introTitle,
  introText,
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
  // contact
  contactTitle,
  contactSubtitle,
  contactTelefone,
  contactEmail,
  contactLongitude,
  contactLatitude
}: TheHomeProps) {
  return (
    <>
      <TheHeader color="primary" />
      <TheHome
        introPretitle={introPretitle}
        introTitle={introTitle}
        introText={introText}
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
        aboutTitle={aboutTitle}
        aboutText={aboutText}
        aboutPartnerships={aboutPartnerships}
        clientsTitle={clientsTitle}
        clientsSubtitle={clientsSubtitle}
        clientsTestimony={clientsTestimony}
        clientsLogos={clientsLogos}
        contactTitle={contactTitle}
        contactSubtitle={contactSubtitle}
        contactTelefone={contactTelefone}
        contactEmail={contactEmail}
        contactLatitude={contactLatitude}
        contactLongitude={contactLongitude}
      />
      <TheFooter />
    </>
  )
}

export const getStaticProps = async () => {
  const { paginasHome } = await client.request(GET_HOME)

  const {
    introPreTitulo,
    introTitulo,
    introTexto,
    tituloServicos,
    subTituloServicos,
    colecoesServicos,
    sobreTitulo,
    textoSobre,
    parceriasLogos,
    clientesTitulo,
    clientesSubtitulo,
    colecoesDepoimento,
    logoClientes,
    secaoDeContato
  } = paginasHome[0]

  return {
    props: {
      // intro
      introPretitle: introPreTitulo,
      introTitle: introTitulo.html,
      introText: introTexto.html,
      // servicos
      servicesTitle: tituloServicos.html,
      servicesSubtitle: subTituloServicos.html,
      servicesItemIcon1: colecoesServicos[0].icone.url,
      servicesItemTitle1: colecoesServicos[0].titulo,
      servicesItemText1: colecoesServicos[0].texto.html,
      servicesItemPhoto1: colecoesServicos[0].imagem.url,
      servicesItemIcon2: colecoesServicos[1].icone.url,
      servicesItemTitle2: colecoesServicos[1].titulo,
      servicesItemText2: colecoesServicos[1].texto.html,
      servicesItemPhoto2: colecoesServicos[1].imagem.url,
      servicesItemIcon3: colecoesServicos[2].icone.url,
      servicesItemTitle3: colecoesServicos[2].titulo,
      servicesItemText3: colecoesServicos[2].texto.html,
      servicesItemPhoto3: colecoesServicos[2].imagem.url,
      // about
      aboutTitle: sobreTitulo.html,
      aboutText: textoSobre.html,
      aboutPartnerships: parceriasLogos,
      // clients
      clientsTitle: clientesTitulo.html,
      clientsSubtitle: clientesSubtitulo.html,
      clientsTestimony: colecoesDepoimento,
      clientsLogos: logoClientes,
      // contato
      contactTitle: secaoDeContato.titulo.html,
      contactSubtitle: secaoDeContato.subtitulo,
      contactTelefone: secaoDeContato.telefone,
      contactEmail: secaoDeContato.eMail,
      contactLongitude: secaoDeContato.localizacao.latitude,
      contactLatitude: secaoDeContato.localizacao.longitude
    }
  }
}
