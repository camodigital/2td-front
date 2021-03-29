import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.ul``

export const SocialItem = styled.li`
  ${({ theme }) => css`
    min-width: ${theme.sizes.xlarge};
    margin: 0 ${theme.spacings.tiny};

    display: inline-block;

    ${media.greaterThan('medium')`
      min-width: ${theme.sizes.large};
    `}

    ${media.greaterThan('large')`
      width: 2rem;
    `}
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

        @media (min-width: 1550px) {
          fill: ${theme.colors.bg};
        }
      }
    }
  `}
`
