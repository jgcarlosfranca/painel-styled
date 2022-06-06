import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import GlobalStyles from "./styles/global";
import Header from "./components/Header/Header";
import Sidebar from "./components/SideBar";
import { BodyConteiner } from "./components/BodyConteiner";

import ThemeButton from "./components/ThemeButton/ThemeButton";
import usePersistedState from "./utils/Hooks/usePersistentState";
import Light from "./styles/Themes/Light";
import Dark from "./styles/Themes/Dark";

import Home from "./pages/Home";

function App() {
  const [theme, setTheme] = usePersistedState("theme", Dark);

  const toggleTheme = () => {
    setTheme(theme.title === "light-theme" ? Dark : Light);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <GlobalStyles />
          <Sidebar />
          <BodyConteiner>
            <Header toggleTheme={toggleTheme} />
            <Routes>
              <Route element={<Home />} exact path="/" />
            </Routes>
          </BodyConteiner>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
