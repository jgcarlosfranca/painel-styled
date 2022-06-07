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
            {routes.map(() => {
              <Link to={routes.path}>
                <StyledSideBarItem>
                  {routes.icon}
                  {routes.name}
                </StyledSideBarItem>
              </Link>;
            })}
          </StyledSideBarList>
        </StyledSideBarMenu>
      </StyledSideBarWrapper>
    </StyledSideBar>
  );
};

