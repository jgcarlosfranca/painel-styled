import React from "react";
import { StyledCard } from "./Card.styles";

export function Cards(props) {

  return (
    <StyledCard>
      {props.children}
    </StyledCard>
  );
}