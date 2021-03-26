import HeadingArea from 'components/HeadingArea'
import * as S from './styles'

export type CardIconLeftProps = {
  icon: React.ReactNode
  title: string
  text: React.ReactNode
}

const CardIconLeft = ({ icon, title, text }: CardIconLeftProps) => (
  <S.Wrapper>
    <S.Icon>{icon}</S.Icon>

    <S.Content>
      <S.Title>
        <HeadingArea>{title}</HeadingArea>
      </S.Title>

      <S.Text>{text}</S.Text>
    </S.Content>
  </S.Wrapper>
)

export default CardIconLeft
