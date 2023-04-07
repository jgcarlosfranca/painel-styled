import React, { useState } from "react";
import { StyledToolsConteiner } from "./Tools.styles";
import Tabs from "../../components/Tab/Tab";
import mocks from "../../mocks/mockDatas";
import { Accordion } from "../../components/Accordion";
import { CardButton } from "../../components/CardButton";
import { Card } from "../../components/Card";
import { Button } from "../../components/Button";
import imagemTeste from "../../assets/img/elemento_agua.png";
import { Carrossel } from "../../components/Carrossel/Carrossel";

import { AccordionAnimated } from "../../components/Accordion/AccordionAnimated";
import { Modal } from "../../components/Modal/Modal";

import slideItems from "../../mocks/CarrossselData/CarrosselItens";

const Tools = () => {
  const [isOpen, setIsOpen] = useState(false);

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
        <AccordionAnimated
          title={"Accordion Animated Title"}
          content={mocks.accordionData.answer}
        />
      </Card>
      <Card>
        <CardButton image={imagemTeste} onClick={() => console.log("clicou")} />
        <Button />
      </Card>
      <Card>
        <button onClick={() => setIsOpen(!isOpen)}>teste</button>
        <Modal
          isOpen={isOpen}
          showing={isOpen}
          onClose={() => setIsOpen(!isOpen)}
        >
          teste com modal
        </Modal>
      </Card>
      <Card>
        <Carrossel items={slideItems} />
      </Card>
    </StyledToolsConteiner>
  );
};

export default Tools;
