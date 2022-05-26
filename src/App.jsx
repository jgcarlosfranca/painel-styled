import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "./styles/global";
import Header from "./components/Header/Header";
import ThemeButton from "./components/ThemeButton/ThemeButton";
import Light from "./styles/Themes/Light";
import Dark from "./styles/Themes/Dark";

function App() {
  const [theme, setTheme] = useState(Dark);

  const toggleTheme = () => {
    setTheme(theme.title === "light-theme" ? Dark : Light);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyles />
        <Header toggleTheme={toggleTheme} />
        <ThemeButton toggleTheme={toggleTheme} />
      </div>
    </ThemeProvider>
  );
}

export default App;
