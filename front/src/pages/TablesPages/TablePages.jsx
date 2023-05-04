import React from "react";
import { Card } from "../../components/Card";
import TableCustom from "../../components/TablePagination/TablePagination";
import Table from "../../components/Table/Table";

const TablePages = () => {
  return (
    <>
      <Card>
        <TableCustom />;
      </Card>
      {/* <Card>
        <Table />;
      </Card> */}
    </>
  );
};

export default TablePages;
