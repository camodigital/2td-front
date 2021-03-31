import HeadingArea from 'components/HeadingArea'
import TheContainer from 'components/TheContainer'
import * as S from './styles'

const WhichLanguage = () => (
  <S.Wrapper>
    <TheContainer size="medium">
      <S.Title>
        <HeadingArea>
          Que língua seu negócio fala? Nós falamos também.
        </HeadingArea>
      </S.Title>

      <S.Content>
        <li>
          <img src="images/logoDynatrace.svg" alt="Dynatrace" />
        </li>
        <li>
          <img src="images/logoAws.svg" alt="AWS" />
        </li>
        <li>
          <img src="images/logoAzure.svg" alt="Windows Azure" />
        </li>
        <li>
          <img src="images/logoGoogleCloud.svg" alt="Google Cloud" />
        </li>
        <li>
          <img src="images/logoPHP.svg" alt="PHP" />
        </li>
        <li>
          <img src="images/logoPython.svg" alt="Python" />
        </li>
        <li>
          <img src="images/logoOracle.svg" alt="Oracle" />
        </li>
        <li>e muito mais...</li>
      </S.Content>
    </TheContainer>
  </S.Wrapper>
)

export default WhichLanguage
