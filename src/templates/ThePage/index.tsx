import * as S from './styles'

import IntroPage from 'components/IntroPage'
import ThreeColumns from 'components/ThreeColumns'
import WhichLanguage from 'components/WhichLanguage'
import SecContact from 'sections/SecContact'

type ThePageProps = {
  title: string
  subtitle: string
  text: string
  photo1: string
  photo2: string
  iconCol1: string
  iconCol2: string
  iconCol3: string
  titleCol1: string
  titleCol2: string
  titleCol3: string
  textCol1: string
  textCol2: string
  textCol3: string
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

const ThePage = ({
  title,
  subtitle,
  text,
  photo1,
  photo2,
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
  // contato
  contactTitle,
  contactSubtitle,
  contactTelefone,
  contactEmail,
  contactLongitude,
  contactLatitude
}: ThePageProps) => (
  <S.Wrapper>
    <IntroPage
      title={title}
      subtitle={subtitle}
      text={text}
      photo1={photo1}
      photo2={photo2}
    />

    <ThreeColumns
      icon1={iconCol1}
      icon2={iconCol2}
      icon3={iconCol3}
      title1={titleCol1}
      title2={titleCol2}
      title3={titleCol3}
      text1={textCol1}
      text2={textCol2}
      text3={textCol3}
    />

    <WhichLanguage
      title={whichLanguageTitle}
      logos={whichLanguageLogos}
      text={WhichLanguageText}
    />
    <SecContact
      title={contactTitle}
      subtitle={contactSubtitle}
      telefone={contactTelefone}
      email={contactEmail}
      latitude={contactLongitude}
      longitude={contactLatitude}
    />
  </S.Wrapper>
)

export default ThePage
