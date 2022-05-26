import React, { useContext, useState } from "react";
import { BsMoonFill, BsFillSunFill } from "react-icons/bs";
import { ThemeContext } from "styled-components";

import { ThemeButtonStyled } from "./styles";

const ThemeButton = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  const icon =
    title === "light-theme" ? (
      <BsMoonFill size={25} />
    ) : (
      <BsFillSunFill size={25} />
    );

  const handleToogleTheme = (e) => {
    toggleTheme();
  };

  return (
    <ThemeButtonStyled onClick={handleToogleTheme}>{icon}</ThemeButtonStyled>
  );
};

export default ThemeButton;
