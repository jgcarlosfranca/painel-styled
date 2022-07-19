import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  StyledSlimSideBar,
  StyledSlimSideBarWrapper,
  StyledSlimSideBarMenu,
  StyledSlimSideBarList,
  StyledSlimSideBarItem,
  StyledSlimSideBarBodyList,
  StyledSlimSideBarTextConteiner,
  StyledSlimSideBarHeader,
} from "./SlimSideBar.styles";
import { LockButton } from "../../LockButton";

import routes from "../../../routes/routes";

export const SlimSideBar = () => {
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
    <StyledSlimSideBar>
      <StyledSlimSideBarWrapper>
        <StyledSlimSideBarMenu>
          <StyledSlimSideBarList>
            <StyledSlimSideBarHeader>
              Teste <LockButton toogleSidebar={toogleSidebar} />
            </StyledSlimSideBarHeader>
            {routes.map((route) => {
              return (
                <Link to={route.path}>
                  <StyledSlimSideBarItem>
                    <StyledSlimSideBarBodyList>
                      {route.icon}
                    </StyledSlimSideBarBodyList>
                  </StyledSlimSideBarItem>
                </Link>
              );
            })}
            <StyledSlimSideBarTextConteiner>
              another test
            </StyledSlimSideBarTextConteiner>
          </StyledSlimSideBarList>
        </StyledSlimSideBarMenu>
      </StyledSlimSideBarWrapper>
    </StyledSlimSideBar>
  );
};
