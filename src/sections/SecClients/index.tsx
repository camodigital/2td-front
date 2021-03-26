import * as S from './styles'

import TheContainer from 'components/TheContainer'
import HeadingSection from 'components/HeadingSection'
import HeadingSubtitle from 'components/HeadingSubtitle'

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
        <S.Testimony>slider</S.Testimony>

        <S.Clients>logos</S.Clients>
      </S.Content>
    </TheContainer>
  </S.Wrapper>
)

export default SecClients
