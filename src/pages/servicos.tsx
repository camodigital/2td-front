import Head from 'next/head'

import TheHeader from 'templates/TheHeader'
import TheFooter from 'templates/TheFooter'
import ThePage from 'templates/ThePage'
import client from 'graphql/client'
import { GET_SERVICOS } from 'graphql/queries'

type PageServicosProps = {
  titleIntro: string
  subtitleIntro: string
  textIntro: string
  photoIntro1: string
  photoIntro2: string
  iconCol1: string
  iconCol2: string
  iconCol3: string
  titleCol1: string
  titleCol2: string
  titleCol3: string
  textCol1: string
  textCol2: string
  textCol3: string
  // WhichLanguage
  whichLanguageTitle: string
  whichLanguageLogos: [{ url: string; width: string; height: string }]
  WhichLanguageText: string
  // contato
  contactTitle: string
  contactSubtitle: string
  contactTelefone: string
  contactEmail: string
  contactLongitude: number
  contactLatitude: number
}

export default function PageServicos({
  titleIntro,
  subtitleIntro,
  textIntro,
  photoIntro1,
  photoIntro2,
  iconCol1,
  iconCol2,
  iconCol3,
  titleCol1,
  titleCol2,
  titleCol3,
  textCol1,
  textCol2,
  textCol3,
  // WhichLanguage
  whichLanguageTitle,
  whichLanguageLogos,
  WhichLanguageText,
  // contact
  contactTitle,
  contactSubtitle,
  contactTelefone,
  contactEmail,
  contactLongitude,
  contactLatitude
}: PageServicosProps) {
  return (
    <>
      <Head>
        <title>2TD - Nossos Serviços</title>
        <meta
          name="description"
          content="Conheça nossos serviços. Observality, cloud, machine learning."
        />
      </Head>
      <TheHeader color="secondary" />
      <ThePage
        title={titleIntro}
        subtitle={subtitleIntro}
        text={textIntro}
        photo1={photoIntro1}
        photo2={photoIntro2}
        iconCol1={iconCol1}
        iconCol2={iconCol2}
        iconCol3={iconCol3}
        titleCol1={titleCol1}
        titleCol2={titleCol2}
        titleCol3={titleCol3}
        textCol1={textCol1}
        textCol2={textCol2}
        textCol3={textCol3}
        whichLanguageTitle={whichLanguageTitle}
        whichLanguageLogos={whichLanguageLogos}
        WhichLanguageText={WhichLanguageText}
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
  const { paginasServico } = await client.request(GET_SERVICOS)

  const {
    tituloIntro,
    subTituloIntro,
    textoIntro,
    fotoIntro1,
    fotoIntro2,
    secaoDeContato,
    iconeColuna1,
    iconeColuna2,
    iconeColuna3,
    tituloColuna1,
    tituloColuna2,
    tituloColuna3,
    textoColuna1,
    textoColuna2,
    textoColuna3,
    secaoQualLingua
  } = paginasServico[0]

  return {
    props: {
      titleIntro: tituloIntro.html,
      subtitleIntro: subTituloIntro.html,
      textIntro: textoIntro.html,
      photoIntro1: fotoIntro1.url,
      photoIntro2: fotoIntro2.url,
      iconCol1: iconeColuna1.url,
      iconCol2: iconeColuna2.url,
      iconCol3: iconeColuna3.url,
      titleCol1: tituloColuna1,
      titleCol2: tituloColuna2,
      titleCol3: tituloColuna3,
      textCol1: textoColuna1.html,
      textCol2: textoColuna2.html,
      textCol3: textoColuna3.html,
      // whichLanguage
      whichLanguageTitle: secaoQualLingua.titulo,
      whichLanguageLogos: secaoQualLingua.logos,
      WhichLanguageText: secaoQualLingua.textoFinal,
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
