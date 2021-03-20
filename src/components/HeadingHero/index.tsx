import * as S from './styles'

export type HeadingProps = {
  children: React.ReactNode
}

const HeadingHero = ({ children }: HeadingProps) => (
  <S.Wrapper>{children}</S.Wrapper>
)

export default HeadingHero
