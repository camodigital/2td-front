import ActiveLink from 'components/ActiveLink'

import * as S from './styles'

const NavLinks = () => (
  <S.Wrapper>
    <S.NavItem>
      <ActiveLink href="/" linkName="teste">
        <S.NavLink title="Home">Home</S.NavLink>
      </ActiveLink>
    </S.NavItem>
    <S.NavItem>
      <ActiveLink href="/sobre">
        <S.NavLink title="Sobre">Sobre</S.NavLink>
      </ActiveLink>
    </S.NavItem>
    <S.NavItem>
      <ActiveLink href="/servicos">
        <S.NavLink title="Serviços">Serviços</S.NavLink>
      </ActiveLink>
    </S.NavItem>
  </S.Wrapper>
)

export default NavLinks
