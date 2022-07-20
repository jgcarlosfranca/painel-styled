import React, { useState } from "react";
import { LargeSideBar } from "./LargeSideBar";
import { SlimSideBar } from "./SlimSidebar";
import { useSelector } from "react-redux/es/exports";

export const SideBar = () => {
  const sideBarState = useSelector(
    (state) => state.sidebarBehavior.sidebarWidth
  );

  const componentRender =
    sideBarState === "SIDEBAR_LARGE" ? <LargeSideBar /> : <SlimSideBar />;

  return <>{componentRender}</>;
};
