import TheContainer from 'components/TheContainer'
import Logo2TD from 'icons/Logo2TD'
import * as S from './styles'

const TheFooter = () => (
  <S.Wrapper>
    <TheContainer>
      <div className="brand">
        <Logo2TD />
      </div>

      <div className="copyright">
        Todos os direitos reservados 2021 - <span className="feat">2TD</span>
      </div>
    </TheContainer>
  </S.Wrapper>
)

export default TheFooter
