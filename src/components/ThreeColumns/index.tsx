import Image from 'next/image'

import * as S from './styles'

import TheContainer from 'components/TheContainer'

type ThreeColumnsProps = {
  icon1: string
  icon2: string
  icon3: string
  title1: string
  title2: string
  title3: string
  text1: string
  text2: string
  text3: string
}

const ThreeColumns = ({
  icon1,
  icon2,
  icon3,
  title1,
  title2,
  title3,
  text1,
  text2,
  text3
}: ThreeColumnsProps) => (
  <S.Wrapper>
    <TheContainer size="medium">
      <div className="col">
        <div className="icon">
          <span>
            <Image
              src={icon1}
              alt={title1}
              width={50}
              height={50}
              quality={75}
            />
          </span>
        </div>
        <div className="title">
          <h2>{title1}</h2>
        </div>
        <div className="text">
          <div dangerouslySetInnerHTML={{ __html: text1 }} />
        </div>
      </div>

      <div className="col">
        <div className="icon">
          <span>
            <Image
              src={icon2}
              alt={title2}
              width={50}
              height={50}
              quality={75}
            />
          </span>
        </div>
        <div className="title">
          <h2>{title2}</h2>
        </div>
        <div className="text">
          <div dangerouslySetInnerHTML={{ __html: text2 }} />
        </div>
      </div>

      <div className="col">
        <div className="icon">
          <span>
            <Image
              src={icon3}
              alt={title3}
              width={50}
              height={50}
              quality={75}
            />
          </span>
        </div>
        <div className="title">
          <h2>{title3}</h2>
        </div>
        <div className="text">
          <div dangerouslySetInnerHTML={{ __html: text3 }} />
        </div>
      </div>
    </TheContainer>
  </S.Wrapper>
)

export default ThreeColumns
