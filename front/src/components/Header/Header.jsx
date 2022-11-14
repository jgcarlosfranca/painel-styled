import React from "react";
import ThemeButton from "../ThemeButton/ThemeButton";

import { HeaderContainer } from "./styles";

const Header = ({ toggleTheme }) => {
  return (
    <HeaderContainer>
      <ThemeButton toggleTheme={toggleTheme} />
    </HeaderContainer>
  );
};

export default Header;
