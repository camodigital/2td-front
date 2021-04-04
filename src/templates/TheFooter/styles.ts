import styled, { css } from 'styled-components'

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    min-height: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;

    .theContainer {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .brand {
        width: 8rem;
      }

      .feat {
        color: ${theme.colors.primary};
      }
    }

    background-color: ${theme.colors.bg};
  `}
`
