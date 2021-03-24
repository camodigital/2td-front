import * as S from './styles'

import IcoLinkedin from 'icons/IcoLinkedin'
import IcoInstagram from 'icons/IcoInstagram'

const SocialLinks = () => (
  <S.Wrapper>
    <S.SocialItem>
      <S.SocialLink>
        <IcoLinkedin aria-label="Nosso Linkedin" />
      </S.SocialLink>
    </S.SocialItem>

    <S.SocialItem>
      <S.SocialLink>
        <IcoInstagram aria-label="Abrir Instragram" />
      </S.SocialLink>
    </S.SocialItem>
  </S.Wrapper>
)

export default SocialLinks
