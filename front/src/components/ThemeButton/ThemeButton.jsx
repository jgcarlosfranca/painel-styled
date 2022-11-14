import React, { useContext, useState } from "react";
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { ThemeContext } from "styled-components";

import { ThemeButtonStyled } from "./styles";

const ThemeButton = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  const icon =
    title === "light-theme" ? (
      <BsMoonStarsFill size={30} />
    ) : (
      <BsFillSunFill size={30} />
    );

  const handleToogleTheme = (e) => {
    toggleTheme();
  };

  return (
    <ThemeButtonStyled onClick={handleToogleTheme}>{icon}</ThemeButtonStyled>
  );
};

export default ThemeButton;
