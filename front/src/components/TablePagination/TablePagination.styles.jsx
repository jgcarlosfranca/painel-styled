import styled from "styled-components";

export const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const TableSearch = styled.input`
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-right: 10px;
`;

export const TableBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TableRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

export const TablePagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export const TablePage = styled.div`
  padding: 5px;
  margin: 0 5px;
  cursor: pointer;
  ${({ selected }) =>
    selected &&
    `
    background-color: #ccc;
    border-radius: 5px;
  `}
`;