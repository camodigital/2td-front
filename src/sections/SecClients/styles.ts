import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small} 0;

    position: relative;

    overflow: hidden;

    background-color: ${theme.colors.bg};
  `}
`

export const Header = styled.header`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.medium};

    text-align: center;
  `}
`

export const Title = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`

export const Subtitle = styled.div``

export const Content = styled.div``

export const Testimony = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xxxlarge};
  `}
`

export const Clients = styled.ul`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;

    li {
      padding: ${theme.spacings.xxsmall};

      img {
        width: auto;
        height: ${theme.sizes.xxxlarge};
      }
    }
  `}
`
