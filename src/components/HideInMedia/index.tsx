import { useState, useEffect } from 'react'

import * as S from './styles'

type HideInMediaProps = {
  size: 'small' | 'medium' | 'large' | 'huge'
  children: React.ReactNode
}

const HideInMedia = ({ size, children }: HideInMediaProps) => {
  const [media, setMedia] = useState(0)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    if (size === 'small') setMedia(0)
    if (size === 'medium') setMedia(768)
    if (size === 'large') setMedia(1170)
    if (size === 'huge') setMedia(1440)

    function checkWindowWidth() {
      if (window.innerWidth > media) setShowContent(true)
      else setShowContent(false)
    }
    checkWindowWidth()

    window.addEventListener('resize', checkWindowWidth)
  }, [media, size])

  return (
    <S.Wrapper className="hideInMedia">{showContent && children}</S.Wrapper>
  )
}

export default HideInMedia
