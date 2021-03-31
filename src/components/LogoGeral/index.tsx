import * as S from './styles'

import Logo2TD from 'icons/Logo2TD'

export type LogoProps = {
  color1?: 'primary' | 'dark' | 'light'
  color2?: 'secondary' | 'dark' | 'light'
}

const LogoGeral = ({ color1 = 'primary', color2 = 'secondary' }: LogoProps) => {
  return (
    <S.Wrapper color1={color1} color2={color2}>
      <Logo2TD />
    </S.Wrapper>
  )
}

export default LogoGeral
