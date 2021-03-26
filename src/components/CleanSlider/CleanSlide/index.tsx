import HeadingArea from 'components/HeadingArea'
import * as S from './styles'

export type CleanSlideProps = {
  title: React.ReactNode
  text: React.ReactNode
  name: React.ReactNode
  role: React.ReactNode
}

const CleanSlide = ({ title, text, name, role }: CleanSlideProps) => (
  <S.Container>
    <S.Content>
      <S.Title>
        <HeadingArea>{title}</HeadingArea>
      </S.Title>
      <S.Text>{text}</S.Text>
      <S.Name>
        {name} - <span className="role">{role}</span>
      </S.Name>
    </S.Content>
  </S.Container>
)

export default CleanSlide
