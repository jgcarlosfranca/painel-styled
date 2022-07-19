import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import GlobalStyles from "./styles/global";
import Header from "./components/Header/Header";
import { SideBar } from "./components/SideBar/LargeSideBar";
import { SlimSideBar } from "./components/SideBar/SlimSidebar";
import { BodyConteiner } from "./components/BodyConteiner";

import usePersistedState from "./utils/Hooks/usePersistentState";
import Light from "./styles/Themes/Light";
import Dark from "./styles/Themes/Dark";

import Home from "./pages/Home/Home";
import Calendar from "./pages/Calendar";
import Reports from "./pages/Reports";
import Tools from "./pages/Tools";

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
          <SideBar />
          <BodyConteiner>
            <Header toggleTheme={toggleTheme} />
            <Routes>
              <Route element={<Home />} exact path="/" />
              <Route element={<Calendar />} exact path="/Calendar" />
              <Route element={<Reports />} exact path="/Reports" />
              <Route element={<Tools />} exact path="/Tools" />
            </Routes>
          </BodyConteiner>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
