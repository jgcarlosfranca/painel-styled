import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import GlobalStyles from "./styles/global";
import Header from "./components/Header/Header";
import { GlassEffectConteiner } from "./components/GlassEffectConteiner";
import { SideBar } from "./components/SideBar/SideBar";
import { BodyConteiner } from "./components/BodyConteiner";

import usePersistedState from "./utils/Hooks/usePersistentState";
import Light from "./styles/Themes/Light";
import Dark from "./styles/Themes/Dark";
import { paths } from "./routes/paths";

import Home from "./pages/Home/Home";
import Calendar from "./pages/Calendar/Calendar";
import Reports from "./pages/Reports/Reports";
import Tools from "./pages/Tools/Tools";
import ModalPage from "./pages/Modal/ModalPage";
import FormsPage from "./pages/Forms/FormsPage";
import ReduxPage from "./pages/ReduxPages/ReduxPage";
import LabFont from "./pages/LabFont/LabFontPage";

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
            <GlassEffectConteiner />
            <Routes>
              <Route element={<Home />} exact path={paths.Root} />
              <Route element={<Calendar />} exact path={paths.Calendar} />
              <Route element={<Reports />} exact path={paths.Reports} />
              <Route element={<Tools />} exact path={paths.Tools} />
              <Route element={<ModalPage />} exact path={paths.Modal} />
              <Route element={<FormsPage />} exact path={paths.Forms} />
              <Route element={<ReduxPage />} exact path={paths.Redux} />
              <Route element={<ReduxPage />} exact path={paths.ReduxSimple} />
              <Route element={<ReduxPage />} exact path={paths.LabFont} />
            </Routes>
          </BodyConteiner>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
