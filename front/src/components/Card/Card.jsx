import React from "react";
import { StyledCard } from "./Card.styles";

export function Card(props) {

  return (
    <StyledCard>
      {props.children}
    </StyledCard>
  );
}