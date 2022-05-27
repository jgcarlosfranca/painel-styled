import React, { useContext, useState } from "react";
import SwitchToogle from "../switchToogleTheme/SwitchToogleTheme";
import ThemeButton from "../ThemeButton/ThemeButton";
import { ThemeContext } from "styled-components";

import { HeaderContainer } from "./styles";

const Header = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  const handleToogleTheme = (e) => {
    toggleTheme()
  }

  return (
    <HeaderContainer>
      Hello World
      <ThemeButton toggleTheme={toggleTheme} />
    </HeaderContainer>
  );
};

export default Header;
