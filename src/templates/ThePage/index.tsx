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
  titleCol1: string
  titleCol2: string
  titleCol3: string
  textCol1: string
  textCol2: string
  textCol3: string
}

const ThePage = ({
  title,
  subtitle,
  text,
  photo1,
  photo2,
  titleCol1,
  titleCol2,
  titleCol3,
  textCol1,
  textCol2,
  textCol3
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
      title1={titleCol1}
      title2={titleCol2}
      title3={titleCol3}
      text1={textCol1}
      text2={textCol2}
      text3={textCol3}
    />

    <WhichLanguage />
    <SecContact />
  </S.Wrapper>
)

export default ThePage
