import Link from 'next/link'

import * as S from './styles'

const NavLinks = () => (
  <S.Wrapper>
    <S.NavItem>
      <Link href="/">
        <S.NavLink title="Home">Home</S.NavLink>
      </Link>
    </S.NavItem>
    <S.NavItem>
      <Link href="/sobre">
        <S.NavLink title="Sobre">Sobre</S.NavLink>
      </Link>
    </S.NavItem>
    <S.NavItem>
      <Link href="/servicos">
        <S.NavLink title="Serviços">Serviços</S.NavLink>
      </Link>
    </S.NavItem>
  </S.Wrapper>
)

export default NavLinks
