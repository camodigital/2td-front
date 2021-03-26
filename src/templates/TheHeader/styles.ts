import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    width: 100%;

    position: fixed;
    top: 0;
    left: 0;
    z-index: ${theme.layers.menu};
  `}
`
