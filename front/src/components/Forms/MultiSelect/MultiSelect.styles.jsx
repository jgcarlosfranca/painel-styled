import styled from "styled-components";

export const MultiSelectWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: ${(props) => (props.tamanhoInput ? props.tamanhoInput : "45%")};
`;

export const MultiSelectButton = styled.button`
  width: 100%;
  background-color: ${(props) => props.theme.colors.sidebarBackgroud};
  border: ${(props) => props.theme.colors.borderHeader};
  color: ${(props) => props.theme.colors.text};
  border-radius: 3px;
  padding: 8px;
  min-width: 120px;
  text-align: left;
  cursor: pointer;
`;

export const MultiSelectList = styled.ul`
  width: 100%;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  background-color: ${(props) => props.theme.colors.sidebarBackgroud};
  border: ${(props) => props.theme.colors.borderHeader};
  border-radius: 3px;
  padding: 8px;
  list-style: none;
  max-height: 200px;
  overflow-y: auto;
`;

export const MultiSelectItem = styled.li`
  width: 100%;
  padding: 4px 8px;
  cursor: pointer;
  color: ${(props) => props.theme.colors.text};

  &:hover {
    background-color: ${(props) => props.theme.colors.sideBarThumb};
  }

  ${({ isSelected }) =>
    isSelected &&
    `background-color: ${(props) => props.theme.colors.sideBarThumb};`}
`;
