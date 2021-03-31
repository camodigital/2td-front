import IcoInstagram from 'icons/IcoInstagram'
import IcoLinkedin from 'icons/IcoLinkedin'
import * as S from './styles'

export type SocialLinksProps = {
  colorIcon: 'primary' | 'secondary'
}

const SocialLinks = ({ colorIcon }: SocialLinksProps) => (
  <S.Wrapper className="social-links">
    <S.SocialItem>
      <S.SocialLink href="" title="Instagram 2TD">
        <S.SocialIcon colorIcon={colorIcon}>
          <IcoInstagram />
        </S.SocialIcon>
      </S.SocialLink>
    </S.SocialItem>

    <S.SocialItem>
      <S.SocialLink href="" title="Linkedin 2TD">
        <S.SocialIcon colorIcon={colorIcon}>
          <IcoLinkedin />
        </S.SocialIcon>
      </S.SocialLink>
    </S.SocialItem>
  </S.Wrapper>
)

export default SocialLinks
