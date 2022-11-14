import React, { useState } from "react";
import { StyledFormsPageConteiner } from "./FormsPage.styles";
import { BackGroundFixedCard } from "../../components/BackGroundFixedCard/BackGroundFixedCard";
import ToggleSwitchCustom from "../../components/SwitchToogle/switchCustom";

const FormsPage = () => {
  const [switchToogle, setSwicthToogle] = useState(true);

  return (
    <StyledFormsPageConteiner>
      <BackGroundFixedCard>
        <ToggleSwitchCustom
          name="teste_Switch_toogle"
          valor={switchToogle}
          label="teste"
          handleChangeCheckBox={() => setSwicthToogle(!switchToogle)}
        />
      </BackGroundFixedCard>
    </StyledFormsPageConteiner>
  );
};

export default FormsPage;
