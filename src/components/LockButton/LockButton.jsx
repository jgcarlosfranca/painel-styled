import React, { useState } from "react";
import useHover from "../../utils/Hooks/useHover";
import { StyledLookButton } from "./LockButton.styles";
import { TiLockClosed, TiLockOpen } from "react-icons/ti";

export const LockButton = (props) => {
  const [isHover, setIsHover] = useState(false);

  const icon = isHover ? <TiLockOpen /> : <TiLockClosed />;
 
  return (
    <StyledLookButton
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      {icon}
    </StyledLookButton>
  );
};
