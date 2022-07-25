import React, { useState } from "react";

import { StyledTab, StyledTabUl } from "./Tab.styles";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const handleTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <StyledTab>
      {/* Tab nav */}
      <StyledTabUl>
        <li
          className={activeTab === "tab1" ? "active" : ""}
          onClick={() => handleTab("tab1")}
        >
          Tab 1
        </li>

        <li
          className={activeTab === "tab2" ? "active" : ""}
          onClick={() => handleTab("tab2")}
        >
          Tab 2
        </li>
        <li
          className={activeTab === "tab3" ? "active" : ""}
          onClick={() => handleTab("tab3")}
        >
          Tab 3
        </li>
        <li
          className={activeTab === "tab4" ? "active" : ""}
          onClick={() => handleTab("tab4")}
        >
          Tab 4
        </li>
      </StyledTabUl>
      <div className="outlet">{/* content will be shown here */}</div>
    </StyledTab>
  );
};
export default Tabs;
