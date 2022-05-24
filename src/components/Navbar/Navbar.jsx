import React from "react";
import { StyledNavbar } from "./Navbar.styles";

export const Navbar = (props) => {
  return <StyledNavbar>
    {props.children}
  </StyledNavbar>;
};
