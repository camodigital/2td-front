import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small} 0;

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

export const Itens = styled.ul`
  ${({ theme }) => css`
    list-style: none;

    .item {
      margin-bottom: ${theme.spacings.medium};

      :last-child {
        margin-bottom: 0;
      }
    }
  `}
`

export const Photo = styled.div``
