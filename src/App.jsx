import React from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "./styles/global";
import Header from "./components/Header/Header";
import Light from "./styles/Themes/Light";
import Dark from "./styles/Themes/Dark";

function App() {
  return (
    <ThemeProvider theme={Light}>
      <div className="App">
        <GlobalStyles />
        <Header />
      </div>
    </ThemeProvider>
  );
}

export default App;
