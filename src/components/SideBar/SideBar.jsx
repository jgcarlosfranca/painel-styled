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
} from "./SideBar.styles";

import routes from "../../routes/routes";

export const SideBar = () => {
  return (
    <StyledSideBar>
      <StyledSideBarWrapper>
        <StyledSideBarMenu>
          <StyledSideBarList>
            Teste
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
            another test
          </StyledSideBarList>
        </StyledSideBarMenu>
      </StyledSideBarWrapper>
    </StyledSideBar>
  );
};
