import React from "react";
import { StyledToolsConteiner } from "./Tools.styles";
import Tabs from "../../components/Tab/Tab";
const numTabs = [
  { titulo: "tab1", body: "bodyTab 1" },
  { titulo: "tab2", body: "bodyTab 2" },
  { titulo: "tab3", body: "bodyTab 3" },
  { titulo: "tab4", body: "bodyTab 4" },
  { titulo: "tab5", body: "bodyTab 5" },
];

const Tools = () => {
  return (
    <StyledToolsConteiner>
      Toooooooools
      <Tabs tabs={numTabs}/>
    </StyledToolsConteiner>
  );
};

export default Tools;
