import React, { useState } from "react";
import useHover from "../../utils/Hooks/useHover";
import { StyledLookButton } from "./LockButton.styles";
import { TiLockClosed, TiLockOpen } from "react-icons/ti";

export const LockButton = (props) => {
  const [hover, isHover] = useHover();

  const icon = isHover ? <TiLockClosed /> : <TiLockOpen />;

  return (
    <StyledLookButton ref={hover} onClick={props.toogleSidebar}>
      {icon}
    </StyledLookButton>
  );
};
