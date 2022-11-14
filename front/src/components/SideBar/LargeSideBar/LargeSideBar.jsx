import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  StyledSideBar,
  StyledSideBarWrapper,
  StyledSideBarMenu,
  StyledSideBarList,
  StyledSideBarItem,
  StyledSideBarBodyList,
  StyledSideBarLinkName,
  StyledSideBarTextConteiner,
  StyledSideBarHeader,
} from "./LargeSideBar.styles";
import { LockButton } from "../../LockButton";

import routes from "../../../routes/routes";

export const LargeSideBar = () => {
  const [sideBarWidth, setSideBarWidth] = useState("15%");
  const [sideBarCollapse, setSideBarCollapse] = useState(false);

  const toogleSidebar = () => {
    if (sideBarCollapse) {
      setSideBarWidth("5%");
      setSideBarCollapse(false);
    } else {
      setSideBarWidth("15%");
      setSideBarCollapse(true);
    }
  };

  return (
    <StyledSideBar>
      <StyledSideBarWrapper>
        <StyledSideBarMenu>
          <StyledSideBarList>
            <StyledSideBarHeader>
              Teste <LockButton toogleSidebar={toogleSidebar} />
            </StyledSideBarHeader>
            {routes.map((route) => {
              return (
                <Link to={route.path}>
                  <StyledSideBarItem>
                    <StyledSideBarBodyList>{route.icon}</StyledSideBarBodyList>
                    <StyledSideBarLinkName>{route.name}</StyledSideBarLinkName>
                  </StyledSideBarItem>
                </Link>
              );
            })}
            <StyledSideBarTextConteiner>
              another test
            </StyledSideBarTextConteiner>
          </StyledSideBarList>
        </StyledSideBarMenu>
      </StyledSideBarWrapper>
    </StyledSideBar>
  );
};
