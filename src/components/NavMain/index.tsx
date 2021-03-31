import { useState } from 'react'

import * as S from './styles'

import ButtonGeral from 'components/ButtonGeral'
import LogoGeral from 'components/LogoGeral'
import MediaMatch from 'components/MediaMatch'
import NavLinks from 'components/NavLinks'
import SocialLinks from 'components/SocialLinks'
import TheContainer from 'components/TheContainer'

const NavMain = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>
      <TheContainer>
        <S.Brand>
          <a>
            <LogoGeral />
          </a>
        </S.Brand>

        {/* nav full is mobile */}
        <MediaMatch lessThan="large">
          <S.NavFull>
            <S.NavFullControl
              aria-label={isOpen ? 'Fechar o Menu' : 'Abrir o Menu'}
              onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
              className={isOpen ? 'closedMenu' : 'openedMenu'}
            >
              <div></div>
              <div></div>
              <div></div>
            </S.NavFullControl>

            <S.NavFullContainer aria-hidden={!isOpen} isOpen={isOpen}>
              <S.NavFullLinks>
                <NavLinks />
              </S.NavFullLinks>

              <S.NavFullSocial>
                <SocialLinks />
              </S.NavFullSocial>

              <S.NavFullButton
                onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
              >
                <ButtonGeral>contato</ButtonGeral>
              </S.NavFullButton>
            </S.NavFullContainer>
          </S.NavFull>
        </MediaMatch>

        {/* nav */}
        <MediaMatch greaterThan="large">
          <S.Nav>
            <S.NavContainer>
              <S.NavLinks>
                <NavLinks />
              </S.NavLinks>

              <S.NavSocial>
                <SocialLinks />
              </S.NavSocial>

              <S.NavButton>
                <ButtonGeral>contato</ButtonGeral>
              </S.NavButton>
            </S.NavContainer>
          </S.Nav>
        </MediaMatch>
      </TheContainer>
    </S.Wrapper>
  )
}

export default NavMain
