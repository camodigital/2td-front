import styled, { css } from 'styled-components'
import media from 'styled-media-query'

type NavFullContainerProps = {
  isOpen: boolean
}

export const Wrapper = styled.div`
  position: relative;

  .theContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ${media.greaterThan('medium')`
    .theContainer {
      display: grid;
      grid-template-columns: 200px 1fr;
      grid-template-rows:  1fr;
    }
  `}
`

export const Brand = styled.div`
  ${({ theme }) => css`
    width: ${theme.sizes.giant};

    position: relative;
    z-index: ${theme.layers.menuHead};
  `}
`

// NavFull is mobile
export const NavFull = styled.nav``

export const NavFullControl = styled.div`
  ${({ theme }) => css`
    width: 4rem;
    height: ${theme.sizes.large};

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;

    position: relative;
    z-index: ${theme.layers.menuHead};

    cursor: pointer;

    &.openedMenu {
      div {
        width: 100%;
        height: ${theme.sizes.xxxsmall};

        background-color: ${theme.colors.secondary};

        transition: 0.5s ease-in-out;

        :nth-child(2) {
          width: 80%;
        }

        :nth-child(3) {
          width: 60%;
        }
      }

      :hover {
        div {
          background-color: ${theme.colors.primary};

          :nth-child(2),
          :nth-child(3) {
            width: 100%;
          }
        }
      }
    }

    &.closedMenu {
      div {
        width: 100%;
        height: ${theme.sizes.xxxsmall};

        background-color: ${theme.colors.secondary};

        transition: 0.5s ease-in-out;

        :nth-child(2) {
          width: 100%;
        }

        :nth-child(3) {
          width: 100%;
        }
      }

      :hover {
        div {
          background-color: ${theme.colors.primary};

          :nth-child(2),
          :nth-child(3) {
            width: 100%;
          }
        }
      }
    }
  `}
`

export const NavFullContainer = styled.div<NavFullContainerProps>`
  ${({ theme, isOpen }) => css`
    width: 100%;
    height: 100vh;
    padding: ${theme.spacings.xxxlarge} 0;

    position: absolute;
    top: 0;
    left: 0;
    z-index: ${theme.layers.menu};

    opacity: ${isOpen ? 1 : 0};

    background-color: ${theme.colors.bg};

    transition: 0.5s ease-in-out;

    ${NavFullLinks}, ${NavFullSocial}, ${NavFullButton} {
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};

      transition: 0.5s ease-in-out;
    }
  `}
`

export const NavFullLinks = styled.div`
  height: 70%;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const NavFullSocial = styled.div`
  height: 15%;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const NavFullButton = styled.div`
  height: 15%;

  display: flex;
  justify-content: center;
  align-items: center;
`

// Nav
export const Nav = styled.nav``

export const NavContainer = styled.nav`
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 11rem 11rem;
  grid-template-rows: 1fr;
`

export const NavLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const NavSocial = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const NavButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
