import * as S from './styles'

import TheContainer from 'components/TheContainer'
import HeadingSection from 'components/HeadingSection'
import HeadingSubtitle from 'components/HeadingSubtitle'
import CleanSlider from 'components/CleanSlider'
import CleanSlide from 'components/CleanSlider/CleanSlide'

const SecClients = () => (
  <S.Wrapper>
    <TheContainer size="medium">
      <S.Header>
        <S.Title>
          <HeadingSection>
            Feedbak <strong>Clientes</strong>
          </HeadingSection>
        </S.Title>

        <S.Subtitle>
          <HeadingSubtitle>
            Clientes satisfeitos com os quais tivemos
            <br />o prazer de trabalhar.
          </HeadingSubtitle>
        </S.Subtitle>
      </S.Header>

      <S.Content>
        <S.Testimony>
          <CleanSlider>
            <CleanSlide
              title="Redução no tempo de identificação de falhas em 98%"
              text="Por meio do serviço de gerenciamento de performance, conseguimos ter visibilidade de todo o ambiente, entender o impacto dos problemas técnicos no negócio e reduzir o tempo de indisponibilidade dos serviços."
              name="Marcelo Lourenço"
              role="Gestor Esfera Fidelidade - Santander"
            />
            <CleanSlide
              title="Solução em 3 dias de problemas que persistiram por 2 anos"
              text="Antes da chegada da 2TD, o Legisdata era um caos. Agora, temos tempo para focar em outros projetos. Ganhamos em qualidade de vida!"
              name="Alessandra Fernandes"
              role="Gestora da CNI - Confederação Nacional da Indústria"
            />
          </CleanSlider>
        </S.Testimony>

        <S.Clients>
          <li>
            <img src="images/logoSantander.svg" alt="Logo cliente Santander" />
          </li>

          <li>
            <img src="images/logoCni.svg" alt="Logo Cliente CNI" />
          </li>
        </S.Clients>
      </S.Content>
    </TheContainer>
  </S.Wrapper>
)

export default SecClients
