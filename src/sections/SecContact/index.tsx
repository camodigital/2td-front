import * as S from './styles'

import ContactForm from 'components/ContactForm'
import HeadingSection from 'components/HeadingSection'
import HeadingSubtitle from 'components/HeadingSubtitle'
import IcoEmail from 'icons/IcoEmail'
import IcoPhone from 'icons/IcoPhone'
import MapContainer from 'components/MapContainer'

type SecContactProps = {
  title: string
  subtitle: string
  telefone: string
  email: string
  latitude: number
  longitude: number
}

const SecContact = ({
  title,
  subtitle,
  telefone,
  email,
  latitude,
  longitude
}: SecContactProps) => {
  return (
    <S.Wrapper id="contato">
      <S.Map>
        <MapContainer latitude={latitude} longitude={longitude} />
      </S.Map>

      <S.Content>
        <S.Header>
          <S.Title>
            <HeadingSection>
              <span dangerouslySetInnerHTML={{ __html: title }}></span>
            </HeadingSection>
          </S.Title>

          <S.Subtitle>
            <HeadingSubtitle>
              <span dangerouslySetInnerHTML={{ __html: subtitle }}></span>
            </HeadingSubtitle>
          </S.Subtitle>
        </S.Header>

        <S.Infos>
          <div className="item">
            <div className="ico">
              <IcoEmail />
            </div>
            <div className="text">{email}</div>
          </div>

          <div className="item">
            <div className="ico">
              <IcoPhone />
            </div>
            <div className="text">{telefone}</div>
          </div>
        </S.Infos>

        <S.Form>
          <ContactForm />
        </S.Form>
      </S.Content>
    </S.Wrapper>
  )
}

export default SecContact
