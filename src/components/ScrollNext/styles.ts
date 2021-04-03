import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;

    cursor: pointer;

    transform: rotate(-90deg);

    transition: 0.5s;

    :hover {
      color: ${theme.colors.primary};
    }
  `}
`

export const Text = styled.div`
  margin-left: 1rem;
`

export const Icon = styled.div`
  transform: rotate(180deg);
  animation: slide-top 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite
    alternate;

  @keyframes slide-top {
    0% {
      transform: translateX(0) rotate(180deg);
    }
    100% {
      transform: translateX(-1rem) rotate(180deg);
    }
  }
`
