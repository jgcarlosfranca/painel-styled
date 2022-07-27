import React, { useState } from "react";
import { BiUpArrow } from "react-icons/bi";
import {
  StyledAccordion,
  StyledAccordionTitle,
  StyledAccordionIcon,
  StyledAccordionContent,
} from "./Accordion.styles";

export const Accordion = (props) => {
  const [isActive, setIsActive] = useState(false);
  console.log(props.title, props.content);

  return (
    <StyledAccordion>
      <StyledAccordionTitle onClick={() => setIsActive(!isActive)}>
        <div>{props.title}</div>
        <StyledAccordionIcon active={isActive}>
          <BiUpArrow />
        </StyledAccordionIcon>
      </StyledAccordionTitle>
      <StyledAccordionContent active={isActive}>
        {props.content}
      </StyledAccordionContent>
    </StyledAccordion>
  );
};
