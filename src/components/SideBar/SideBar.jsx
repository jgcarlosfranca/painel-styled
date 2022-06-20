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
} from "./SideBar.styles";
import { LockButton } from "../LockButton";

import routes from "../../routes/routes";

export const SideBar = () => {
  const [sideBarWidth, setSideBarWidth] = useState("15%");
  const [sideBarCollapse, setSideBarCollapse] = useState(false);

  const toogleSidebar = () => {
    console.log("clicou na lock sidebar!");
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
              Teste <LockButton />
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
