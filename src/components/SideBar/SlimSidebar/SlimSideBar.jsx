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
  StyledSlimSideBarLockIconWrapper,
} from "./SlimSideBar.styles";
import { LockButton } from "../../LockButton";

import routes from "../../../routes/routes";

export const SlimSideBar = () => {
  return (
    <StyledSlimSideBar>
      <StyledSlimSideBarWrapper>
        <StyledSlimSideBarMenu>
          <StyledSlimSideBarList>
            <StyledSlimSideBarHeader>
              T
              <StyledSlimSideBarLockIconWrapper>
                <LockButton />
              </StyledSlimSideBarLockIconWrapper>
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
