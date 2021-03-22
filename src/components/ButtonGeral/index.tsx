import * as S from './styles'

export type ButtonGeralProps = {
  children: React.ReactNode
  styleButton?: 'fill' | 'outline'
}

const ButtonGeral = ({ children, styleButton = 'fill' }: ButtonGeralProps) => (
  <S.Wrapper styleButton={styleButton}>{children}</S.Wrapper>
)

export default ButtonGeral
