import styled, { css } from 'styled-components'

export const Wrapper = styled.ul`
  list-style: none;
`

export const NavItem = styled.li`
  ${({ theme }) => css`
    margin: ${theme.sizes.medium};
    padding: ${theme.sizes.xxsmall} ${theme.sizes.tiny};

    display: inline-block;

    position: relative;
  `}
`

export const NavLink = styled.a`
  ${({ theme }) => css`
    display: block;

    font-size: ${theme.sizes.small};
    font-weight: ${theme.font.weight.weight3};
    text-decoration: none;
    text-transform: uppercase;
    color: ${theme.colors.secondary};

    ::after {
      content: '';
      width: 100%;
      height: ${theme.sizes.tiny};

      position: absolute;
      bottom: 0;
      left: 0;

      transform: scaleX(0);

      background-color: ${theme.colors.primary};

      transition: 0.5s ease-in-out;
    }

    :hover {
      ::after {
        transform: scaleX(1);
      }
    }
  `}
`
