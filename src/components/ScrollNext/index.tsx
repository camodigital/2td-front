import * as S from './styles'

const ScrollNext = () => {
  const scrollTo = () => {
    const contact: HTMLElement | null = document.getElementById('nextSec')

    if (contact) {
      const contactPosY = contact.getBoundingClientRect().top
      window.scrollTo({ top: contactPosY, left: 0, behavior: 'smooth' })
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
