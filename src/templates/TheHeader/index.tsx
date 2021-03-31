import { useState, useEffect } from 'react'

import * as S from './styles'

import NavMain, { NavMainProps } from 'components/NavMain'

const TheHeader = ({ color }: NavMainProps) => {
  const [scrolling, setScrolling] = useState(false)

  useEffect(() => {
    const checkScroll = () => {
      const yOffset = window.pageYOffset

      if (yOffset > 10) {
        setScrolling(true)
      } else {
        setScrolling(false)
      }
    }

    window.addEventListener('scroll', checkScroll)
    return function unMount() {
      window.removeEventListener('scroll', checkScroll)
    }
  }, [])

  return (
    <S.Wrapper className={scrolling ? 'scrolling' : ''}>
      <NavMain color={color} />
    </S.Wrapper>
  )
}

export default TheHeader
