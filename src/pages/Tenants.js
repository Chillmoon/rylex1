import React from "react";
import MuiTable from "../components/TenantsTable/MuiTable";
import BaseLayout from "../components/BaseLayout/BaseLayout";
import TenantsLinks from "../components/BaseLayout/TenantsLinks";

export default function Tenants() {
  return (
    <>
      <BaseLayout baseComponent={<MuiTable />} links={<TenantsLinks />} />
    </>
  );
}
