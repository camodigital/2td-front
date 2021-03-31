import IcoArrowDown2 from 'icons/IcoArrowDown2'
import * as S from './styles'

export type ButtonMenuProps = {
  color: 'primary' | 'secondary'
}

const ButtonMenu = ({ color }: ButtonMenuProps) => {
  const scrollTo = () => {
    const contact: HTMLElement | null = document.getElementById('contato')

    if (contact) {
      const contactPosY = contact.getBoundingClientRect().top
      window.scrollTo({ top: contactPosY, left: 0, behavior: 'smooth' })
    }
  }

  return (
    <S.Wrapper color={color} onClick={scrollTo}>
      <S.Content color={color}>Contato</S.Content>

      <S.ContentHover color={color}>
        <span>
          <IcoArrowDown2 />
        </span>
      </S.ContentHover>
    </S.Wrapper>
  )
}

export default ButtonMenu
