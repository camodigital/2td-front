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
}

export default function PageServicos({
  titleIntro,
  subtitleIntro,
  textIntro,
  photoIntro1,
  photoIntro2
}: PageServicosProps) {
  return (
    <>
      <TheHeader />
      <ThePage
        title={titleIntro}
        subtitle={subtitleIntro}
        text={textIntro}
        photo1={photoIntro1}
        photo2={photoIntro2}
        titleCol1="Observality"
        textCol1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet facilisis odio. Integer sollicitudin, nisl mattis congue "
        titleCol2="Cloud"
        textCol2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet facilisis odio. Integer sollicitudin, nisl mattis congue "
        titleCol3="Machine Learning"
        textCol3="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet facilisis odio. Integer sollicitudin, nisl mattis congue "
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
    fotoIntro2
  } = paginasServico[0]

  return {
    props: {
      titleIntro: tituloIntro.html,
      subtitleIntro: subTituloIntro.html,
      textIntro: textoIntro.html,
      photoIntro1: fotoIntro1.url,
      photoIntro2: fotoIntro2.url
    }
  }
}
