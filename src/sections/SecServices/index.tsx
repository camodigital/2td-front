import { useState } from 'react'
import Image from 'next/image'

import * as S from './styles'

import TheContainer from 'components/TheContainer'
import HeadingSection from 'components/HeadingSection'
import HeadingSubtitle from 'components/HeadingSubtitle'
import CardIconLeft from 'components/CardIconLeft'
import HideInMedia from 'components/HideInMedia'

type SecServicesProps = {
  servicesTitle: string
  servicesSubtitle: string
  servicesItemIcon1: string
  servicesItemTitle1: string
  servicesItemText1: string
  servicesItemPhoto1: string
  servicesItemIcon2: string
  servicesItemTitle2: string
  servicesItemText2: string
  servicesItemPhoto2: string
  servicesItemIcon3: string
  servicesItemTitle3: string
  servicesItemText3: string
  servicesItemPhoto3: string
}

const SecServices = ({
  servicesTitle,
  servicesSubtitle,
  servicesItemIcon1,
  servicesItemTitle1,
  servicesItemText1,
  servicesItemPhoto1,
  servicesItemIcon2,
  servicesItemTitle2,
  servicesItemText2,
  servicesItemPhoto2,
  servicesItemIcon3,
  servicesItemTitle3,
  servicesItemText3,
  servicesItemPhoto3
}: SecServicesProps) => {
  const [itemOne, setItemOne] = useState(true)
  const [itemTwo, setItemTwo] = useState(false)
  const [itemThree, setItemThree] = useState(false)
  const [itemFour, setItemFour] = useState(true)

  function handleEnterOne() {
    setItemOne(true)
    setItemTwo(false)
    setItemThree(false)
    setItemFour(false)
  }

  function handleEnterTwo() {
    setItemOne(false)
    setItemTwo(true)
    setItemThree(false)
    setItemFour(false)
  }

  function handleEnterThree() {
    setItemOne(false)
    setItemTwo(false)
    setItemThree(true)
    setItemFour(false)
  }

  return (
    <S.Wrapper>
      <TheContainer size="medium">
        <S.Header>
          <S.Title>
            <HeadingSection>
              <span dangerouslySetInnerHTML={{ __html: servicesTitle }}></span>
            </HeadingSection>
          </S.Title>

          <S.Subtitle>
            <HeadingSubtitle>
              <span
                dangerouslySetInnerHTML={{ __html: servicesSubtitle }}
              ></span>
            </HeadingSubtitle>
          </S.Subtitle>
        </S.Header>

        <S.Content>
          <S.Itens>
            <li
              className={`item ${itemOne ? 'active' : ''}`}
              onMouseEnter={handleEnterOne}
            >
              <CardIconLeft
                icon={servicesItemIcon1}
                title={servicesItemTitle1}
                text={servicesItemText1}
              ></CardIconLeft>
            </li>

            <li
              className={`item ${itemTwo ? 'active' : ''}`}
              onMouseEnter={handleEnterTwo}
            >
              <CardIconLeft
                icon={servicesItemIcon2}
                title={servicesItemTitle2}
                text={servicesItemText2}
              ></CardIconLeft>
            </li>

            <li
              className={`item ${itemThree ? 'active' : ''}`}
              onMouseEnter={handleEnterThree}
            >
              <CardIconLeft
                icon={servicesItemIcon3}
                title={servicesItemTitle3}
                text={servicesItemText3}
              ></CardIconLeft>
            </li>
          </S.Itens>

          <HideInMedia size="large">
            <S.Photo>
              <ul className="mask">
                <li className={`item ${itemOne ? 'active' : ''}`}>
                  <div className="imgContainer">
                    <Image
                      src={servicesItemPhoto1}
                      alt={servicesItemTitle1}
                      width={1000}
                      height={1000}
                      quality={75}
                    />
                  </div>
                </li>

                <li className={`item ${itemTwo ? 'active' : ''}`}>
                  <div className="imgContainer">
                    <Image
                      src={servicesItemPhoto2}
                      alt={servicesItemTitle1}
                      width={1000}
                      height={1000}
                      quality={75}
                    />
                  </div>
                </li>

                <li className={`item ${itemThree ? 'active' : ''}`}>
                  <div className="imgContainer">
                    <Image
                      src={servicesItemPhoto3}
                      alt={servicesItemTitle2}
                      width={1000}
                      height={1000}
                      quality={75}
                    />
                  </div>
                </li>

                <li className={`item ${itemFour ? 'active' : ''}`}>
                  <div className="imgContainer">
                    <Image
                      src={servicesItemPhoto1}
                      alt={servicesItemTitle3}
                      width={1000}
                      height={1000}
                      quality={75}
                    />
                  </div>
                </li>
              </ul>

              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
            </S.Photo>
          </HideInMedia>
        </S.Content>
      </TheContainer>
    </S.Wrapper>
  )
}

export default SecServices
