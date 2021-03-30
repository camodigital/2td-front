import * as S from './styles'

import TheContainer from 'components/TheContainer'

type ThreeColumnsProps = {
  title1: string
  title2: string
  title3: string
  text1: string
  text2: string
  text3: string
}

const ThreeColumns = ({
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
        <div className="title">
          <h2>{title1}</h2>
        </div>
        <div className="text">
          <p>{text1}</p>
        </div>
      </div>

      <div className="col">
        <div className="title">
          <h2>{title2}</h2>
        </div>
        <div className="text">
          <p>{text2}</p>
        </div>
      </div>

      <div className="col">
        <div className="title">
          <h2>{title3}</h2>
        </div>
        <div className="text">
          <p>{text3}</p>
        </div>
      </div>
    </TheContainer>
  </S.Wrapper>
)

export default ThreeColumns
