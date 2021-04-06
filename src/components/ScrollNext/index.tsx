import * as S from './styles'

const ScrollNext = () => {
  const scrollTo = () => {
    const contact: HTMLElement | null = document.getElementById('nextSec')

    if (contact) {
      contact.scrollIntoView({
        behavior: 'smooth',
        inline: 'end'
      })
    }
  }

  return (
    <S.Wrapper onClick={scrollTo}>
      <S.Icon>
        <span>&#10140;</span>
      </S.Icon>
      <S.Text>scroll</S.Text>
    </S.Wrapper>
  )
}

export default ScrollNext
