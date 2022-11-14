import React, { useState } from "react";
import useHover from "../../utils/Hooks/useHover";
import { StyledLookButton } from "./LockButton.styles";
import { TiLockClosed, TiLockOpen } from "react-icons/ti";

import usePersistedState from "../../utils/Hooks/usePersistentState";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { stateChanges } from "../../redux/features/sideBarBehaviorSlice";

export const LockButton = (props) => {
  const [isHover, setIsHover] = useState(false);

  const sideBarState = useSelector(
    (state) => state.sidebarBehavior.sidebarWidth
  );
  const dispatch = useDispatch();

  const [sideBarSectionState, setSideBarSectionState] = usePersistedState(
    "sideBar",
    sideBarState
  );

  const icon =
    sideBarState === "SIDEBAR_LARGE" ? (
      isHover ? (
        <TiLockOpen />
      ) : (
        <TiLockClosed />
      )
    ) : isHover ? (
      <TiLockClosed />
    ) : (
      <TiLockOpen />
    );

  return (
    <StyledLookButton
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
      onClick={() => {
        dispatch(stateChanges());
      }}
    >
      {icon}
    </StyledLookButton>
  );
};
