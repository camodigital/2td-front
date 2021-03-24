import styled, { css } from 'styled-components'

export const Wrapper = styled.ul``

export const SocialItem = styled.li`
  ${({ theme }) => css`
    min-width: 30px;
    margin: 0 ${theme.spacings.tiny};

    display: inline-block;
  `}
`

export const SocialLink = styled.a`
  ${({ theme }) => css`
    display: block;

    cursor: pointer;

    svg {
      path {
        fill: ${theme.colors.secondary};

        transition: 0.5s ease-in-out;

        :hover {
          fill: ${theme.colors.primary};
        }
      }
    }
  `}
`
