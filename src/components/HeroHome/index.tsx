import * as S from './styles'

import HeadingArea from 'components/HeadingArea'
import HeadingHero from 'components/HeadingHero'
import ButtonGeral from 'components/ButtonGeral'

const HeroHome = () => (
  <S.Wrapper>
    <S.PreTitle>
      <HeadingArea>Bem vindo a 2TD</HeadingArea>
    </S.PreTitle>

    <S.Title>
      <HeadingHero>
        <strong>Promovemos</strong> Tecnologia e Transformação Digital
      </HeadingHero>
    </S.Title>

    <S.Text>
      <p>
        Somos especialistas em observability e oferecemos monitoramento
        inteligente de aplicações para agregar valor ao negócio do cliente.
      </p>
    </S.Text>

    <S.Button>
      <ButtonGeral>Sobre</ButtonGeral>
    </S.Button>
  </S.Wrapper>
)

export default HeroHome
