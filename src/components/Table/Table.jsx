import React from "react";
import { StyledTableResponsiveConteiner, StyledTable } from "./Table.styles";

const Table = (props) => {
  const { titles, body, checkAll, setCheckAll } = props;
  return (
    <StyledTableResponsiveConteiner>
      <StyledTable>
        <thead>
          <tr>
            {titles.map((title, index) => {
              return index === 0 ? (
                <th key="checkBoxSelect">
                  <input
                    type="checkbox"
                    name="checkBoxSelect"
                    checked={checkAll}
                    onChange={setCheckAll}
                  />
                </th>
              ) : (
                <th key={title}>{title}</th>
              );
            })}
          </tr>
        </thead>
        <tbody>{body}</tbody>
      </StyledTable>
    </StyledTableResponsiveConteiner>
  );
};
export default Table;
