import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 54px;
  background: #fff;
  border-bottom: 1px solid #dbdbdb;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  @media (max-width: 614px) {
    padding: 0 20px;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }

  .logo-wrapper {
    display: flex;
    align-items: center;
    /* 21px pois é 20px + 1px(que é o tamanho da linha) */
    gap: 21px;
    /* Relativo para posicionar o pseudo-elemento */
    position: relative;

    @media (max-width: 614px) {
      position: static;
    }

    /* Pseudo-elemento, precisa do content para ser renderizado na página,
    normalmente seria o texto a ser exibido */
    &::after {
      content: "";
      /* Com absolute podemos mover esse elemento pela tela com top, left, 
      right e bottom relativo ao pai que é o logo-wrapper */
      position: absolute;
      width: 1px;
      height: 22px;
      background: #dbdbdb;
      /* No figma a logo escrita do insta fica a 5px a mais da borda superior do
      que da borda inferior, e essa linha começa junto com ela */
      top: 5px;
      /* Tamanho do ícone do insta é 22px, quero que ela se posicione a
      mais 10px, que seria o meio entre as duas imagens */
      left: 32px;

      @media (max-width: 614px) {
        display: none;
      }
    }

    /* Segundo elemento que é filho direto de logo-wrapper, nth-child seleciona
    pelo índice/sequência que o elemento aparece no html */
    > :nth-child(2) {
      margin-top: 5px;

      @media (max-width: 614px) {
        position: absolute;
        top: calc(50% - 2px);
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }

  .input-wrapper {
    @media (max-width: 614px) {
      display: none;
    }

    input {
      width: 215px;
      height: 28px;
      border-radius: 3px;
      background: #fafafa;
      border: 1px solid #dbdbdb;
      padding: 0 8px;
      font-size: 12px;
      text-align: center;
      color: #8e8e8e;
      transition: 0.2s;

      &:focus {
        outline: none;
        border-color: #a6a6a6;

        &::placeholder {
          color: transparent;
        }
      }

      &::placeholder {
        color: #979797;
      }
    }
  }

  .actions-wrapper {
    display: flex;
    align-items: center;
    gap: 20px;

    @media (max-width: 614px) {
      & > *:not(:first-child) {
        display: none;
      }
    }
  }
`;
