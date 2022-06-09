import React from "react";
import { Link } from "react-router-dom";
import {
  StyledSideBar,
  StyledSideBarWrapper,
  StyledSideBarMenu,
  StyledSideBarList,
  StyledSideBarItem,
} from "./SideBarTeste.styles";

import routes from "../../routes/routes";

export const SideBarTeste = () => {
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
                    {route.icon}
                    {route.name}
                  </StyledSideBarItem>
                </Link>
              );
            })}
          </StyledSideBarList>
        </StyledSideBarMenu>
      </StyledSideBarWrapper>
    </StyledSideBar>
  );
};
