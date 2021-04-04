import Image from 'next/image'

import HeadingArea from 'components/HeadingArea'
import TheContainer from 'components/TheContainer'
import * as S from './styles'

type WhichLanguageProps = {
  title: string
  logos: [{ url: string; width: string; height: string }]
  text: string
}

const WhichLanguage = ({ title, logos, text }: WhichLanguageProps) => (
  <S.Wrapper>
    <TheContainer size="medium">
      <S.Title>
        <HeadingArea>{title}</HeadingArea>
      </S.Title>
      <S.Content>
        <ul className="itens">
          {logos &&
            logos.map((item, i) => {
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
          <li>{text}</li>
        </ul>
      </S.Content>
    </TheContainer>
  </S.Wrapper>
)

export default WhichLanguage
