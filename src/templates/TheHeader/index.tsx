import { useState, useEffect } from 'react'

import * as S from './styles'

import NavMain from 'components/NavMain'

const TheHeader = () => {
  const [scrolling, setScrolling] = useState(false)

  useEffect(() => {
    document.addEventListener('scroll', function () {
      const yOffset = window.pageYOffset

      if (yOffset > 10) {
        setScrolling(true)
      } else {
        setScrolling(false)
      }
    })
  }, [scrolling])

  return (
    <S.Wrapper className={scrolling ? 'scrolling' : ''}>
      <NavMain />
    </S.Wrapper>
  )
}

export default TheHeader
