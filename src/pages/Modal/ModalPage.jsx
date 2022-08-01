import React, { useState } from "react";
import {
  StyledModalConteiner,
  StyledPane,
  StyledHeader,
  StyledAppButton,
} from "./ModalPage.styles";

const ModalPage = () => {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);
  const showModal = () => {
    setShow(true);
  };

  const actOnModalResult = (arg) => {
    if (arg) {
    }
  };
  const hideModal = (arg) => {
    setShow(false);
  };

  return (
    <StyledModalConteiner>
      <StyledPane>
        <StyledHeader>An App</StyledHeader>
        <StyledAppButton type="button" onClick={showModal}>
          just a text to test modal
        </StyledAppButton>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
      </StyledPane>
    </StyledModalConteiner>
  );
};

export default ModalPage;
