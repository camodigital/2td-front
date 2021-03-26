import ButtonGeral from 'components/ButtonGeral'
import HeadingArea from 'components/HeadingArea'
import HeadingSection from 'components/HeadingSection'
import TheContainer from 'components/TheContainer'
import BGVerde from 'icons/BGVerde'
import * as S from './styles'

const SecAbout = () => (
  <S.Wrapper>
    <S.BGVerde>
      <BGVerde />
    </S.BGVerde>
    <TheContainer size="medium">
      <S.Header>
        <HeadingSection>
          A melhor Equipe da <br />
          <strong>América Latina</strong>
        </HeadingSection>
      </S.Header>

      <S.Content>
        <S.Text>
          <p>
            Equipe 100% certificada Dynatrace Associate + Três primeiros
            especialistas com certificação Dynatrace Professional LATAM
          </p>
          <p>
            Com a aplicação de observability, conseguimos atuar na causa raiz do
            problema. A 2TD é expert em investigar, identificar alertas,
            monitorar, descobrir, analisar e entender o problema para propor
            soluções. O método de trabalho da 2TD concilia as melhoras práticas
            de PDCA, LeanIT e metodologias ágeis.
          </p>
        </S.Text>

        <S.Partnerships>
          <div className="title">
            <HeadingArea>Parcerias:</HeadingArea>
          </div>

          <ul className="itens">
            <li>
              <img src="images/logoDynatrace.svg" alt="Dynatrace" />
            </li>

            <li>
              <img src="images/logoAws.svg" alt="AWS" />
            </li>

            <li>
              <img src="images/logoAzure.svg" alt="Azure" />
            </li>
          </ul>
        </S.Partnerships>

        <S.Button>
          <ButtonGeral>Saiba Mais</ButtonGeral>
        </S.Button>
      </S.Content>
    </TheContainer>
  </S.Wrapper>
)

export default SecAbout
