import React from "react";
import { StyledToolsConteiner } from "./Tools.styles";
import Tabs from "../../components/Tab/Tab";
import mocks from "../../mocks/mockDatas";
import { Accordion } from "../../components/Accordion";
import { CardButton } from "../../components/CardButton";
import { Card } from "../../components/Card";
import { Button } from "../../components/Button";
import imagemTeste from "../../assets/img/elemento_agua.png";
import { Carrossel } from "../../components/Carrossel/Carrossel";

import slideItems from "../../mocks/CarrossselData/CarrosselItens";

const Tools = () => {
  return (
    <StyledToolsConteiner>
      <Tabs tabs={mocks.numTabs} />
      <Accordion
        title={mocks.accordionData.question}
        content={mocks.accordionData.answer}
      />

      <Accordion
        title={mocks.accordionData.question}
        content={mocks.accordionData.answer}
      />
      <Accordion
        title={mocks.accordionData.question}
        content={mocks.accordionData.answer}
      />
      <Card>
        <CardButton image={imagemTeste} onClick={() => console.log("clicou")} />
        <Button />
      </Card>
      <Card>
        <Carrossel items={slideItems} />
      </Card>
    </StyledToolsConteiner>
  );
};

export default Tools;
