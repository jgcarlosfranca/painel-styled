import React from "react";
import { StyledBackGroundFixedCard } from "./BackGroundFixedCard.styles";

export function BackGroundFixedCard(props) {

  return (
    <StyledBackGroundFixedCard>
      {props.children}
    </StyledBackGroundFixedCard>
  );
}