import styled, { css } from 'styled-components'
import { SocialLinksProps } from '.'

export const Wrapper = styled.ul``

export const SocialItem = styled.li`
  padding: 1rem;

  display: inline-block;
`

export const SocialLink = styled.a``

export const SocialIcon = styled.div<SocialLinksProps>`
  ${({ theme, colorIcon }) => css`
    svg {
      width: 3rem;
      height: 3rem;
      path {
        fill: ${theme.colors[colorIcon]};
      }
    }
  `}
`
