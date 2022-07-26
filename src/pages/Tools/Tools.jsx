import React from "react";
import { StyledToolsConteiner } from "./Tools.styles";
import Tabs from "../../components/Tab/Tab";
import numTabs from "../../mocks/mockDatas";

const Tools = () => {
  return (
    <StyledToolsConteiner>
      <Tabs tabs={numTabs} />
    </StyledToolsConteiner>
  );
};

export default Tools;
