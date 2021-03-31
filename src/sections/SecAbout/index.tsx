import Link from 'next/link'

import * as S from './styles'

import ButtonGeral from 'components/ButtonGeral'
import HeadingArea from 'components/HeadingArea'
import HeadingSection from 'components/HeadingSection'
import MediaMatch from 'components/MediaMatch'
import TheContainer from 'components/TheContainer'
import BGVerde from 'icons/BGVerde'

type SecAboutProps = {
  aboutTitle: string
  aboutText: string
  aboutPartnerships: [{ url: string }]
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
      <MediaMatch greaterThan="large">
        <S.Phone>
          <img src="images/phone.png" alt="Telefone celular" />
        </S.Phone>
      </MediaMatch>

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
                      <img src={item.url} alt="Logo Parceiro" />
                    </li>
                  )
                })}
            </ul>
          </S.Partnerships>

          <Link href="/sobre">
            <S.Button>
              <ButtonGeral>Saiba Mais</ButtonGeral>
            </S.Button>
          </Link>
        </S.Content>
      </S.Box>
    </TheContainer>
  </S.Wrapper>
)

export default SecAbout
