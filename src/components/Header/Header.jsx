import React, { useContext, useState } from "react";
import SwitchToogle from "../switchToogleTheme/SwitchToogleTheme";
import { ThemeContext } from "styled-components";

import { Container } from "./styles";

const Header = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  const handleToogleTheme = (e) => {
    toggleTheme()
  }

  return (
    <Container>
      Hello World
      <SwitchToogle
        name="teste_Switch_toogle"
        valor={title === 'light-theme'}
        label="teste"
        handleChangeCheckBox={handleToogleTheme}
      />
    </Container>
  );
};

export default Header;
