import React, { useState } from "react";
import { StyledFormsPageConteiner } from "./FormsPage.styles";
import { BackGroundFixedCard } from "../../components/BackGroundFixedCard/BackGroundFixedCard";
import ToggleSwitchCustom from "../../components/SwitchToogle/switchCustom";

import { Card } from "../../components/Card";
import MultiSelect from "../../components/Forms/MultiSelect/MultiSelect";

const FormsPage = () => {
  const [switchToogle, setSwicthToogle] = useState(true);

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
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
      <Card>
        <MultiSelect options={options} tamanhoInput={"15rem"} />
      </Card>
    </StyledFormsPageConteiner>
  );
};

export default FormsPage;
