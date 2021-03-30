import TheHeader from 'templates/TheHeader'
import TheFooter from 'templates/TheFooter'
import ThePage from 'templates/ThePage'

export default function Page() {
  return (
    <>
      <TheHeader />
      <ThePage
        title="Sobre a 2TD"
        subtitle="Comunicação que flui
        "
        text="Acreditamos que comunicação é tudo e só dá certo se as equipes falam a mesma língua.

        A experiência da equipe 2TD em arquitetura, infraestrutura, banco de dados, desenvolvimento e análise vão proporcionar uma interação fácil, rápida e descomplicada com os profissionais de TI de sua empresa."
        photo1="images/product1.jpg"
        photo2="images/product2.jpg"
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
