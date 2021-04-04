import Image from 'next/image'

import * as S from './styles'

import TheContainer from 'components/TheContainer'
import HeadingSection from 'components/HeadingSection'
import HeadingSubtitle from 'components/HeadingSubtitle'
import CleanSlider from 'components/CleanSlider'
import CleanSlide from 'components/CleanSlider/CleanSlide'

type SecClientsProps = {
  clientsTitle: string
  clientsSubtitle: string
  clientsTestimony: [
    { titulo: string; texto: { html: string }; nome: string; cargo: string }
  ]
  clientsLogos: [{ url: string; width: string; height: string }]
}

const SecClients = ({
  clientsTitle,
  clientsSubtitle,
  clientsTestimony,
  clientsLogos
}: SecClientsProps) => (
  <S.Wrapper>
    <TheContainer size="medium">
      <S.Header>
        <S.Title>
          <HeadingSection>
            <span dangerouslySetInnerHTML={{ __html: clientsTitle }} />
          </HeadingSection>
        </S.Title>

        <S.Subtitle>
          <HeadingSubtitle>
            <span dangerouslySetInnerHTML={{ __html: clientsSubtitle }} />
          </HeadingSubtitle>
        </S.Subtitle>
      </S.Header>

      <S.Content>
        <S.Testimony>
          <CleanSlider>
            {clientsTestimony &&
              clientsTestimony.map((item) => {
                return (
                  <CleanSlide
                    key={item.titulo}
                    title={item.titulo}
                    text={item.texto.html}
                    name={item.nome}
                    role={item.cargo}
                  />
                )
              })}
          </CleanSlider>
        </S.Testimony>

        <S.Clients>
          {clientsLogos &&
            clientsLogos.map((item) => {
              return (
                <li key={item.url}>
                  <Image
                    src={item.url}
                    alt={item.url}
                    width={item.width}
                    height={item.height}
                    quality={100}
                  />
                </li>
              )
            })}
        </S.Clients>
      </S.Content>
    </TheContainer>
  </S.Wrapper>
)

export default SecClients
