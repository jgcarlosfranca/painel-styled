import React, { useState } from "react";
import { StyledTab, StyledTabUl, StyledTabBody } from "./Table.styles";

const Table = (props) => {
  const deafultActiveTab = props.tabs[0].titulo
  const [activeTab, setActiveTab] = useState(deafultActiveTab);
  
  const handleTab = (tab) => {
    setActiveTab(tab);
  };

  const tabBody = () => {
    let component = <div></div>;
    switch (activeTab) {
      case "tab1":
        component = <div> body da Tab1</div>;
        break;
      case "tab2":
        component = <div> body da Tab2</div>;
        break;
      case "tab3":
        component = <div> body da Tab3</div>;
        break;
      case "tab4":
        component = <div> body da Tab4</div>;
        break;

      default:
        component = <div> body da Tab1</div>;
        break;
    }
    return component;
  };

  return (
    <StyledTab>
      {/* Tab nav */}
      <StyledTabUl>
        {props.tabs.map((tab) => {
          return (
            <li
              className={activeTab === tab.titulo ? "active" : ""}
              onClick={() => handleTab(tab.titulo)}
            >
              {tab.titulo}
            </li>
          );
        })}
      </StyledTabUl>
      <StyledTabBody>{tabBody()}</StyledTabBody>
    </StyledTab>
  );
};
export default Table;
