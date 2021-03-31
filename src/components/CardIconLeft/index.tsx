import HeadingArea from 'components/HeadingArea'
import * as S from './styles'

export type CardIconLeftProps = {
  icon: string
  title: string
  text: string
}

const CardIconLeft = ({ icon, title, text }: CardIconLeftProps) => (
  <S.Wrapper>
    <S.Icon>
      <img src={icon} alt={title} />
    </S.Icon>

    <S.Content>
      <S.Title>
        <HeadingArea>{title}</HeadingArea>
      </S.Title>

      <S.Text>
        <span dangerouslySetInnerHTML={{ __html: text }} />
      </S.Text>
    </S.Content>
  </S.Wrapper>
)

export default CardIconLeft
