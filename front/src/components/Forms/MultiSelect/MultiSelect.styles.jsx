import styled from "styled-components";

export const MultiSelectWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: ${(props) => (props.tamanhoInput ? props.tamanhoInput : "45%")};
`;

export const MultiSelectButton = styled.button`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 8px;
  min-width: 120px;
  text-align: left;
  cursor: pointer;
`;

export const MultiSelectList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 8px;
  list-style: none;
  max-height: 200px;
  overflow-y: auto;
`;

export const MultiSelectItem = styled.li`
  padding: 4px 8px;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }

  ${({ isSelected }) =>
    isSelected &&
    `
      background-color: #f1f1f1;
    `}
`;
