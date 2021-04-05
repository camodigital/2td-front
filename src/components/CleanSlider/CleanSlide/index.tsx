import * as S from './styles'

export type CleanSlideProps = {
  title: string
  text: string
  name: string
  role: string
}

const CleanSlide = ({ title, text, name, role }: CleanSlideProps) => (
  <S.Container>
    <S.Content>
      <S.Title>
        <div className="title">{title}</div>
      </S.Title>
      <S.Text>
        <span dangerouslySetInnerHTML={{ __html: text }} />
      </S.Text>
      <S.Name>
        {name} - <span className="role">{role}</span>
      </S.Name>
    </S.Content>
  </S.Container>
)

export default CleanSlide
