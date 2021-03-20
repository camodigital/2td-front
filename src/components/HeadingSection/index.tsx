import * as S from './styles'

export type HeadingSectionProps = {
  children: React.ReactNode
}

const HeadingSection = ({ children }: HeadingSectionProps) => (
  <S.Wrapper>{children}</S.Wrapper>
)

export default HeadingSection
