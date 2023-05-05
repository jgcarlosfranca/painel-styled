import React, { useState } from "react";
import {
  TableWrapper,
  TableHeader,
  TableSearch,
  TableBody,
  TableRow,
  TablePagination,
  TablePage,
} from "./TablePagination.styles";

const data = [
  { id: 1, name: "Item 1", value: 100 },
  { id: 2, name: "Item 2", value: 200 },
  { id: 3, name: "Item 3", value: 300 },
  { id: 4, name: "Item 4", value: 400 },
  { id: 5, name: "Item 5", value: 500 },
  { id: 6, name: "Item 6", value: 600 },
  { id: 7, name: "Item 7", value: 700 },
  { id: 8, name: "Item 8", value: 800 },
  { id: 9, name: "Item 9", value: 900 },
  { id: 10, name: "Item 10", value: 1000 },
  { id: 11, name: "Item 1", value: 100 },
  { id: 12, name: "Item 2", value: 200 },
  { id: 13, name: "Item 3", value: 300 },
  { id: 14, name: "Item 4", value: 400 },
  { id: 15, name: "Item 5", value: 500 },
  { id: 16, name: "Item 6", value: 600 },
  { id: 17, name: "Item 7", value: 700 },
  { id: 18, name: "Item 8", value: 800 },
  { id: 19, name: "Item 9", value: 900 },
  { id: 20, name: "Item 10", value: 1000 },
];

const TableCustom = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const itemsPerPage = 5;
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);

  return (
    <TableWrapper>
      <TableHeader>
        <TableSearch
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div>{`Showing ${startIndex + 1}-${endIndex} of ${
          filteredData.length
        } items`}</div>
      </TableHeader>
      <TableBody>
        {currentData.map((item) => (
          <TableRow key={item.id}>
            <div>{item.name}</div>
            <div>{item.value}</div>
          </TableRow>
        ))}
      </TableBody>
      <TablePagination>
        {Array.from(Array(totalPages).keys()).map((pageNumber) => (
          <TablePage
            key={pageNumber}
            selected={pageNumber + 1 === page}
            onClick={() => setPage(pageNumber + 1)}
          >
            {pageNumber + 1}
          </TablePage>
        ))}
      </TablePagination>
    </TableWrapper>
  );
};

export default TableCustom;
