import TheContainer from 'components/TheContainer'
import Logo2TD from 'icons/Logo2TD'
import * as S from './styles'

const TheFooter = () => (
  <S.Wrapper>
    <TheContainer>
      <div className="brand">
        <Logo2TD />
      </div>

      <div className="copyright">All Rights Reserved 2021 2TD</div>
    </TheContainer>
  </S.Wrapper>
)

export default TheFooter
