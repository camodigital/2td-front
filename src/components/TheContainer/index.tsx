import * as S from './styles'

export type TheContainerProps = {
  children: React.ReactNode
  size?: 'full' | 'medium' | 'right'
}

const TheContainer = ({ children, size = 'full' }: TheContainerProps) => (
  <S.Wrapper size={size} className="theContainer">
    {children}
  </S.Wrapper>
)

export default TheContainer
