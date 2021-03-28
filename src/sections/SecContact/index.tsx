import * as S from './styles'

import ContactForm from 'components/ContactForm'
import HeadingSection from 'components/HeadingSection'
import TheContainer from 'components/TheContainer'
import HeadingSubtitle from 'components/HeadingSubtitle'
import IcoEmail from 'icons/IcoEmail'
import IcoPhone from 'icons/IcoPhone'

const SecContact = () => (
  <S.Wrapper>
    <TheContainer size="medium">
      <S.Map>map</S.Map>

      <S.Content>
        <S.Header>
          <S.Title>
            <HeadingSection>
              Entre em <strong>Contato</strong>
            </HeadingSection>
          </S.Title>

          <S.Subtitle>
            <HeadingSubtitle>
              Nos deixe saber em que podemos ajudar
            </HeadingSubtitle>
          </S.Subtitle>
        </S.Header>

        <S.Infos>
          <div className="item">
            <div className="ico">
              <IcoEmail />
            </div>
            <div className="text">contato@2td.com</div>
          </div>

          <div className="item">
            <div className="ico">
              <IcoPhone />
            </div>
            <div className="text">+55 (61) 9999 9999</div>
          </div>
        </S.Infos>

        <S.Form>
          <ContactForm />
        </S.Form>
      </S.Content>
    </TheContainer>
  </S.Wrapper>
)

export default SecContact
