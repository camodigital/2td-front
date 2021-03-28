import * as S from './styles'

import TheContainer from 'components/TheContainer'
import HeadingSection from 'components/HeadingSection'
import HeadingSubtitle from 'components/HeadingSubtitle'
import MediaMatch from 'components/MediaMatch'
import CardIconLeft from 'components/CardIconLeft'
import IcoRocket from 'icons/IcoRocket'
import IcoCloud from 'icons/IcoCloud'
import IcoRobot from 'icons/IcoRobot'

const SecProducts = () => (
  <S.Wrapper>
    <TheContainer size="medium">
      <S.Header>
        <S.Title>
          <HeadingSection>
            Nossos <strong>Produtos</strong>
          </HeadingSection>
        </S.Title>

        <S.Subtitle>
          <HeadingSubtitle>
            Transformamos o futuro com tecnologia e valores.
          </HeadingSubtitle>
        </S.Subtitle>
      </S.Header>

      <S.Content>
        <S.Itens>
          <li className="item">
            <CardIconLeft
              icon={<IcoRocket />}
              title="Observality"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet facilisis odio. Integer sollicitudin, nisl mattis congue "
            ></CardIconLeft>
          </li>

          <li className="item">
            <CardIconLeft
              icon={<IcoCloud />}
              title="Cloud"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet facilisis odio. Integer sollicitudin, nisl mattis congue "
            ></CardIconLeft>
          </li>

          <li className="item">
            <CardIconLeft
              icon={<IcoRobot />}
              title="Machine Learning"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet facilisis odio. Integer sollicitudin, nisl mattis congue "
            ></CardIconLeft>
          </li>
        </S.Itens>

        <MediaMatch greaterThan="large">
          <S.Photo>photo</S.Photo>
        </MediaMatch>
      </S.Content>
    </TheContainer>
  </S.Wrapper>
)

export default SecProducts
