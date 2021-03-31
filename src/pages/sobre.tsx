import TheHeader from 'templates/TheHeader'
import TheFooter from 'templates/TheFooter'
import ThePage from 'templates/ThePage'
import client from 'graphql/client'
import { GET_SOBRE } from 'graphql/queries'

type PageSobreProps = {
  titleIntro: string
  subtitleIntro: string
  textIntro: string
  photoIntro1: string
  photoIntro2: string
}

export default function PageSobre({
  titleIntro,
  subtitleIntro,
  textIntro,
  photoIntro1,
  photoIntro2
}: PageSobreProps) {
  return (
    <>
      <TheHeader />
      <ThePage
        title={titleIntro}
        subtitle={subtitleIntro}
        text={textIntro}
        photo1={photoIntro1}
        photo2={photoIntro2}
        titleCol1="Por que a 2TD?"
        textCol1="Se a sua empresa não consegue evoluir por que a equipe vive “apagando incêndio” e essa rotina absorve quase 100% do tempo dos gestores e dos técnicos, a 2TD pode (mesmo!) te ajudar.

        Com a aplicação de observability, conseguimos atuar na causa raiz do problema. A 2TD é expert em investigar, identificar alertas, monitorar, descobrir, analisar e entender o problema para propor soluções.

        O método de trabalho da 2TD concilia as melhoras práticas de PDCA, LeanIT e metodologias ágeis."
        titleCol2="E o resultado?"
        textCol2="Ganho de performance, economia de recursos, cliente satisfeito, diminuição de estresse, de custos e de reclamações. E ainda sobra tempo para focar em outras melhorias."
        titleCol3=""
        textCol3=""
      />
      <TheFooter />
    </>
  )
}

export const getStaticProps = async () => {
  const { paginasSobre } = await client.request(GET_SOBRE)

  const {
    tituloIntro,
    subtituloIntro,
    textoIntro,
    fotoIntro1,
    fotoIntro2
  } = paginasSobre[0]

  return {
    props: {
      titleIntro: tituloIntro.html,
      subtitleIntro: subtituloIntro.html,
      textIntro: textoIntro.html,
      photoIntro1: fotoIntro1.url,
      photoIntro2: fotoIntro2.url
    }
  }
}
