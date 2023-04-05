import React, { useState } from "react";
import { AccordionWrapper, Title, Content, Text } from "./Accordion.styles";

export const AccordionAnimated = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionWrapper>
      <Title onClick={toggleAccordion}>{title}</Title>
      <Content isOpen={isOpen}>
        <Text isOpen={isOpen}>{content}</Text>
      </Content>
    </AccordionWrapper>
  );
};
