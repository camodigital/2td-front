import Image from 'next/image'

import HeadingHero from 'components/HeadingHero'
import HeadingSubtitle from 'components/HeadingSubtitle'
import TheContainer from 'components/TheContainer'
import BGVerde from 'icons/BGVerde'
import * as S from './styles'
import ScrollNext from 'components/ScrollNext'

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
        <ScrollNext />
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
              <Image
                src={photo1}
                width={300}
                height={500}
                quality={75}
                objectFit={'cover'}
              />
            </div>

            <div className="photo">
              <Image
                src={photo2}
                width={300}
                height={500}
                quality={75}
                objectFit={'cover'}
              />
            </div>
          </S.Photos>
        </S.Box>
      </TheContainer>
    </S.Wrapper>
  )
}

export default IntroPage
