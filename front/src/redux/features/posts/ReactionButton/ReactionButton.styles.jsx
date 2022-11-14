import styled from "styled-components";

export const StyledReactionButtons = styled.button`
  margin: 0 0.25em 0 0;
  background: transparent;
  border: none;
  color: ${(props) => props.theme.colors.text};
  font-size: 1rem;
  cursor: pointer;
`;

export const StyledWrapperReactionButtons = styled.div`
  display: flex;
  justify-content: flex-end;
`;
