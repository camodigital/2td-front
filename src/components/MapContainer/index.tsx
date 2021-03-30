import { useMemo } from 'react'
import dynamic from 'next/dynamic'
import * as S from './styles'

const MapContainer = () => {
  const Map = useMemo(
    () =>
      dynamic(
        () => import('components/Map'), // replace '@components/map' with your component's location
        {
          // eslint-disable-next-line react/display-name
          loading: () => <p>carregando mapa</p>,
          ssr: false // This line is important. It's what prevents server-side render
        }
      ),
    [
      /* list variables which should trigger a re-render here */
    ]
  )
  return (
    <S.Wrapper>
      <Map />
    </S.Wrapper>
  )
}

export default MapContainer
