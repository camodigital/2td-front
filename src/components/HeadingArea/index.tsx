import * as S from './styles'

export type HeadingAreaProps = {
  children: React.ReactNode
}

const HeadingArea = ({ children }: HeadingAreaProps) => (
  <S.Wrapper>{children}</S.Wrapper>
)

export default HeadingArea
