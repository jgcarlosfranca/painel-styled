import React from "react";
import { StyledGlassEffectConteiner } from "./GlassEffectConteiner.styles";

export const GlassEffectConteiner = (props) => {
  return <StyledGlassEffectConteiner>
    {props.children}
  </StyledGlassEffectConteiner>;
};
