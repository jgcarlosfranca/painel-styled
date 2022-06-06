import React from "react";
import { StyledBodyConteiner } from "./BodyConteiner.styles";

export const BodyConteiner = (props) => {
  return <StyledBodyConteiner>
    {props.children}
  </StyledBodyConteiner>;
};
