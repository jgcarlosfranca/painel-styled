import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import {
  StyledAccordion,
  StyledAccordionTitle,
  StyledAccordionIcon,
  StyledAccordionContent,
} from "./Accordion.styles";

export const Accordion = (props) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <StyledAccordion>
      <StyledAccordionTitle onClick={() => setIsActive(!isActive)}>
        <div>{props.title}</div>
        <StyledAccordionIcon active={isActive}>
          <IoIosArrowUp />
        </StyledAccordionIcon>
      </StyledAccordionTitle>
      <StyledAccordionContent active={isActive}>
        {props.content}
      </StyledAccordionContent>
    </StyledAccordion>
  );
};
