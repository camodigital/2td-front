import * as S from './styles'

export type HeadingSubtitleProps = {
  children: React.ReactNode
}

const HeadingSubtitle = ({ children }: HeadingSubtitleProps) => (
  <S.Wrapper>{children}</S.Wrapper>
)

export default HeadingSubtitle
