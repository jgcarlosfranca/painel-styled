import React from "react";
import { ModalWrapper, ModalContent } from "./Modal.styles";

export const Modal = ({ isOpen, showing = false, onClose, children }) => {
  return (
    <ModalWrapper isOpen={isOpen} showing={showing} onClick={onClose}>
      <ModalContent isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalContent>
    </ModalWrapper>
  );
};
