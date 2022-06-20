import React from "react";
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
import { TiLockClosed } from "react-icons/ti";

import routes from "../../routes/routes";

export const SideBar = () => {
  const toogleSidebar = () => {
    console.log("clicou na lock sidebar!");
  };

  return (
    <StyledSideBar>
      <StyledSideBarWrapper>
        <StyledSideBarMenu>
          <StyledSideBarList>
            <StyledSideBarHeader>
              Teste <TiLockClosed onClick={toogleSidebar} />
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
