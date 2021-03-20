import * as S from './styles'

const Main = ({
  title = 'Camo - Boilerplate',
  description = 'TypeScript, React, NextJS and Styled Components'
}) => (
  <S.Wrapper>
    <h1>{title}</h1>
    <p>{description}</p>
  </S.Wrapper>
)

export default Main
