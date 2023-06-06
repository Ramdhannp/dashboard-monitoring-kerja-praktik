import React, { useState } from "react";

import {
  PagingState,
  IntegratedPaging,
  SearchState,
  IntegratedFiltering,
} from "@devexpress/dx-react-grid";
import {
  Grid,
  Table,
  TableHeaderRow,
  Toolbar,
  TableFixedColumns,
  SearchPanel,
  PagingPanel,
  ColumnChooser,
  TableColumnVisibility,
} from "@devexpress/dx-react-grid-bootstrap4";
import "@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css";
import "../css/tables.css";

const CardTables = (props) => {
  const [columns] = useState([
    { name: "id", title: "No" },
    { name: "full_name", title: "Nama" },
    { name: "nim", title: "Nim" },
    { name: "angkatan", title: "Angkatan" },
    { name: "lokasi_kp", title: "Lokasi" },
    { name: "pekerjaan", title: "Job Title" },
    { name: "status", title: "Status" },
    { name: "hide", title: "hide" },
  ]);

  const rows = props.dataTable;

  const [tableColumnExtensions] = useState([{ columnName: "id", width: 60 }]);

  const [leftColumns] = useState(["id", "full_name", "hide"]);
  const [defaultHiddenColumnNames] = useState([
    "id",
    "pekerjaan",
    "lokasi_kp",
    "hide",
  ]);

  return (
    <div className="card d-flex justify-content-end">
      <p className="d-none">tabel</p>
      <Grid rows={rows} columns={columns} columnMinWidth={10}>
        <SearchState />
        <IntegratedFiltering />
        <PagingState pageSize={10} />
        <IntegratedPaging />
        <Table columnExtensions={tableColumnExtensions} />
        <TableHeaderRow />
        <TableColumnVisibility
          defaultHiddenColumnNames={defaultHiddenColumnNames}
        />
        <TableFixedColumns leftColumns={leftColumns} />
        <PagingPanel />
        <Toolbar />
        <SearchPanel className="justify-content-end" />
        <ColumnChooser />
      </Grid>
    </div>
  );
};

export default CardTables;
