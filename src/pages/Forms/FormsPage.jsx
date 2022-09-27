import React from "react";
import { StyledFormsPageConteiner } from "./FormsPage.styles";
import { BackGroundFixedCard } from "../../components/BackGroundFixedCard/BackGroundFixedCard";
import ToggleSwitchCustom from "../../components/SwitchToogle/switchCustom";

const FormsPage = () => {
  return (
    <StyledFormsPageConteiner>
      <BackGroundFixedCard>
        <ToggleSwitchCustom />
      </BackGroundFixedCard>
    </StyledFormsPageConteiner>
  );
};

export default FormsPage;
