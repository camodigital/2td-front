import { useState } from 'react'
import * as S from './styles'

import TheContainer from 'components/TheContainer'
import HeadingSection from 'components/HeadingSection'
import HeadingSubtitle from 'components/HeadingSubtitle'
import MediaMatch from 'components/MediaMatch'
import CardIconLeft from 'components/CardIconLeft'
import IcoRocket from 'icons/IcoRocket'
import IcoCloud from 'icons/IcoCloud'
import IcoRobot from 'icons/IcoRobot'

const SecProducts = () => {
  const [itemOne, setItemOne] = useState(false)
  const [itemTwo, setItemTwo] = useState(false)
  const [itemThree, setItemThree] = useState(false)
  const [itemFour, setItemFour] = useState(true)

  function handleEnterOne() {
    setItemOne(true)
    setItemFour(false)
  }

  function handleLeaveOne() {
    setItemOne(false)
    setItemFour(true)
  }

  function handleEnterTwo() {
    setItemTwo(true)
    setItemFour(false)
  }

  function handleLeaveTwo() {
    setItemTwo(false)
    setItemFour(true)
  }

  function handleEnterThree() {
    setItemThree(true)
    setItemFour(false)
  }

  function handleLeaveThree() {
    setItemThree(false)
    setItemFour(true)
  }

  return (
    <S.Wrapper>
      <TheContainer size="medium">
        <S.Header>
          <S.Title>
            <HeadingSection>
              Nossos <strong>Produtos</strong>
            </HeadingSection>
          </S.Title>

          <S.Subtitle>
            <HeadingSubtitle>
              Transformamos o futuro com tecnologia e valores.
            </HeadingSubtitle>
          </S.Subtitle>
        </S.Header>

        <S.Content>
          <S.Itens>
            <li
              className={`item ${itemOne ? 'active' : ''}`}
              onMouseEnter={handleEnterOne}
              onMouseLeave={handleLeaveOne}
            >
              <CardIconLeft
                icon={<IcoRocket />}
                title="Observality"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet facilisis odio. Integer sollicitudin, nisl mattis congue "
              ></CardIconLeft>
            </li>

            <li
              className={`item ${itemTwo ? 'active' : ''}`}
              onMouseEnter={handleEnterTwo}
              onMouseLeave={handleLeaveTwo}
            >
              <CardIconLeft
                icon={<IcoCloud />}
                title="Cloud"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet facilisis odio. Integer sollicitudin, nisl mattis congue "
              ></CardIconLeft>
            </li>

            <li
              className={`item ${itemThree ? 'active' : ''}`}
              onMouseEnter={handleEnterThree}
              onMouseLeave={handleLeaveThree}
            >
              <CardIconLeft
                icon={<IcoRobot />}
                title="Machine Learning"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet facilisis odio. Integer sollicitudin, nisl mattis congue "
              ></CardIconLeft>
            </li>
          </S.Itens>

          <MediaMatch greaterThan="large">
            <S.Photo>
              <ul className="mask">
                <li className={`item ${itemOne ? 'active' : ''}`}>
                  <img src="images/product1.jpg" alt="Foto Observality" />
                </li>

                <li className={`item ${itemTwo ? 'active' : ''}`}>
                  <img src="images/product2.jpg" alt="Foto Cloud" />
                </li>

                <li className={`item ${itemThree ? 'active' : ''}`}>
                  <img src="images/product3.jpg" alt="Foto Machine Learning" />
                </li>

                <li className={`item ${itemFour ? 'active' : ''}`}>
                  <img src="images/product2.jpg" alt="Foto Cloud" />
                </li>
              </ul>

              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
            </S.Photo>
          </MediaMatch>
        </S.Content>
      </TheContainer>
    </S.Wrapper>
  )
}

export default SecProducts
