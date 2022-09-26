import MaterialTable from "material-table";
import React, { useState, useEffect } from "react";

export default function MuiTable() {
  const empList = [
    { id: 1, name: "Aboba", email: "ssjfskc" },
    { id: 2, name: "Aboba2", email: "ssjfskc" },
    { id: 3, name: "Aboba3", email: "ssjfskc" },
    { id: 4, name: "Aboba4", email: "ssjfskc" },
  ];

  const [data, setData] = useState(empList);
  const columns = [
    { title: "ID", field: "id" },
    { title: "Name", field: "name" },
    { title: "Email", field: "email" },
  ];
  return (
    <>
      <MaterialTable title="Tenants" data={data} columns={columns} />
    </>
  );
}
