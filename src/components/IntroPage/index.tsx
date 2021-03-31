import HeadingHero from 'components/HeadingHero'
import HeadingSubtitle from 'components/HeadingSubtitle'
import TheContainer from 'components/TheContainer'
import BGVerde from 'icons/BGVerde'
import * as S from './styles'

type IntroPageProps = {
  title: string
  subtitle: string
  text: string
  photo1: string
  photo2: string
}

const IntroPage = ({
  title,
  subtitle,
  text,
  photo1,
  photo2
}: IntroPageProps) => {
  return (
    <S.Wrapper>
      <S.BG>
        <BGVerde />
      </S.BG>
      <TheContainer size="right">
        <S.Box>
          <S.Content>
            <S.Header>
              <S.Title>
                <HeadingHero>
                  <span dangerouslySetInnerHTML={{ __html: title }} />
                </HeadingHero>
              </S.Title>

              <S.Subtitle>
                <HeadingSubtitle>
                  <span dangerouslySetInnerHTML={{ __html: subtitle }} />
                </HeadingSubtitle>
              </S.Subtitle>
            </S.Header>

            <S.Text>
              <span dangerouslySetInnerHTML={{ __html: text }} />
            </S.Text>
          </S.Content>

          <S.Photos>
            <div className="photo">
              <img src={photo1} />
            </div>

            <div className="photo">
              <img src={photo2} />
            </div>
          </S.Photos>
        </S.Box>
      </TheContainer>
    </S.Wrapper>
  )
}

export default IntroPage
