import Image from 'next/image'
import Link from 'next/link'

import * as S from './styles'

import ButtonGeral from 'components/ButtonGeral'
import HeadingArea from 'components/HeadingArea'
import HeadingSection from 'components/HeadingSection'
import TheContainer from 'components/TheContainer'
import BGVerde from 'icons/BGVerde'
import HideInMedia from 'components/HideInMedia'

type SecAboutProps = {
  aboutTitle: string
  aboutText: string
  aboutPartnerships: [{ url: string; width: string; height: string }]
}

const SecAbout = ({
  aboutTitle,
  aboutText,
  aboutPartnerships
}: SecAboutProps) => (
  <S.Wrapper>
    <S.BGVerde>
      <BGVerde />
    </S.BGVerde>

    <TheContainer size="medium">
      <HideInMedia size="large">
        <S.Phone>
          <img src="images/phone.webp" alt="Telefone celular" />
        </S.Phone>
      </HideInMedia>

      <S.Box>
        <S.Header>
          <HeadingSection>
            <span dangerouslySetInnerHTML={{ __html: aboutTitle }} />
          </HeadingSection>
        </S.Header>

        <S.Content>
          <S.Text>
            <div dangerouslySetInnerHTML={{ __html: aboutText }} />
          </S.Text>

          <S.Partnerships>
            {aboutPartnerships && (
              <div className="title">
                <HeadingArea>Parcerias:</HeadingArea>
              </div>
            )}

            <ul className="itens">
              {aboutPartnerships &&
                aboutPartnerships.map((item, i) => {
                  return (
                    <li key={i}>
                      <Image
                        src={item.url}
                        alt={item.url}
                        width={item.width}
                        height={item.height}
                        quality={75}
                      />
                    </li>
                  )
                })}
            </ul>
          </S.Partnerships>

          <S.Button>
            <Link href="/servicos">
              <a>
                <ButtonGeral>Saiba Mais</ButtonGeral>
              </a>
            </Link>
          </S.Button>
        </S.Content>
      </S.Box>
    </TheContainer>
  </S.Wrapper>
)

export default SecAbout
