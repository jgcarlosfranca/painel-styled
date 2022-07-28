import styled from "styled-components";

export const StyledAccordion = styled.div`
  width: 80%;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.sidebarBackgroud};
  transition-property: height;
  transition-duration: 2s;
  transition-timing-function: linear;
  transition-delay: 1s;
`;

export const StyledAccordionTitle = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  cursor: pointer;
  padding: 1rem;
`;

export const StyledAccordionIcon = styled.div`
  display: flex;
  transition: transform 1s;
  ${(props) => props.active && "transform: rotate(180deg);"}
`;

export const StyledAccordionContent = styled.div`
  padding: 1rem;
  transition: opacity 1s ease-out;
  display: ${(props) => (props.active ? "auto" : "none")};
`;
