import styled, { keyframes } from "styled-components";

export const topStart = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const DownEnd = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-50%);
  }
`;

export const ModalWrapper = styled.div`
  z-index: 10000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.659);
  display: ${({ showing }) => (showing ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  animation: ${({ isOpen }) => (isOpen ? topStart : DownEnd)} 0.5s ease-in-out;
`;

export const ModalContent = styled.div`
  background-color: ${(props) => props.theme.colors.contrastBackgroud};
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  animation: ${({ isOpen }) =>
      isOpen
        ? keyframes`
          from {
            transform: translateY(-50%);
          }
          to {
            transform: translateY(0);
          }
        `
        : keyframes`
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-50%);
          }
        `}
    0.3s ease-in-out;
`;
