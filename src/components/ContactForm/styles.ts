import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  form {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-gap: 3rem;
  }
`

export const InputGroup = styled.div`
  ${({ theme }) => css`
    width: 100%;

    position: relative;

    label {
      position: absolute;
      top: 50%;
      left: ${theme.spacings.xxsmall};
      transform: translateY(-50%);

      transition: 0.5s;
    }

    input {
      width: 100%;
      padding: ${theme.spacings.xxsmall};

      border: 1px solid ${theme.colors.textLight};
      border-radius: 0.4rem;

      transition: 0.5s;
    }

    &.active {
      label {
        top: 4rem;
        left: 0;
        transform: translateY(0) scale(0.8);
      }

      input {
        padding: ${theme.spacings.xxsmall};

        border: 0;

        box-shadow: ${theme.shadows.tinyShadow};
      }
    }
  `}
`

export const TextareaGroup = styled.div`
  ${({ theme }) => css`
    width: 100%;

    position: relative;

    label {
      position: absolute;
      top: 50%;
      left: ${theme.spacings.xxsmall};
      transform: translateY(-50%);
    }

    textarea {
      width: 100%;
      min-height: 15rem;
      padding: ${theme.spacings.xxsmall};

      resize: none;

      border: 1px solid ${theme.colors.textLight};
    }

    &.active {
      label {
        top: 15rem;
        left: 0;
        transform: translateY(0) scale(0.8);
      }

      textarea {
        padding: ${theme.spacings.xxsmall};

        border: 0;

        box-shadow: ${theme.shadows.tinyShadow};
      }
    }
  `}
`

export const Warnings = styled.div``

export const WarningFill = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;

    color: ${theme.colors.error};

    transition: 0.5s;
    &.show {
      height: 2rem;
      transform: scale(1);

      opacity: 1;
    }
    &.hide {
      height: 0px;
      transform: scale(0);

      opacity: 0;
    }
  `}
`

export const WarningSucess = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;

    color: ${theme.colors.sucess};

    transition: 0.5s;
    &.show {
      height: 2rem;
      transform: scale(1);

      opacity: 1;
    }
    &.hide {
      height: 0px;
      transform: scale(0);

      opacity: 0;
    }
  `}
`

export const WarningError = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;

    color: ${theme.colors.error};

    transition: 0.5s;
    &.show {
      height: 2rem;
      transform: scale(1);

      opacity: 1;
    }
    &.hide {
      height: 0px;
      transform: scale(0);

      opacity: 0;
    }
  `}
`

export const WarningCaptcha = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;

    color: ${theme.colors.error};

    transition: 0.5s;
    &.show {
      height: 2rem;
      transform: scale(1);

      opacity: 1;
    }
    &.hide {
      height: 0px;
      transform: scale(0);

      opacity: 0;
    }
  `}
`

export const Recaptcha = styled.div`
  transition: 0.5s;
  &.show {
    height: 100px;
    transform: scale(1);

    opacity: 1;
  }
  &.hide {
    height: 0px;

    transform: scale(0);

    pointer-events: none;

    opacity: 0;
  }
`

export const Button = styled.div``
