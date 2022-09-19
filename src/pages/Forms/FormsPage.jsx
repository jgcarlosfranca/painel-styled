import React from "react";
import { StyledFormsPageConteiner } from "./FormsPage.styles";
import { Card } from "../../components/Card";
import { ToggleSwitch } from "../../components/ToggleSwitch";

const FormsPage = () => {
  return (
    <StyledFormsPageConteiner>
      <Card>
        <ToggleSwitch />
      </Card>
    </StyledFormsPageConteiner>
  );
};

export default FormsPage;
