import React from "react";

import { StyledTab, StyledTabUl } from "./Tab.styles";

const Tabs = () => {
  return (
    <StyledTab>
      {/* Tab nav */}
      <StyledTabUl>
        <li>Tab 1</li>
        <li>Tab 2</li>
      </StyledTabUl>
      <div className="outlet">{/* content will be shown here */}</div>
    </StyledTab>
  );
};
export default Tabs;
