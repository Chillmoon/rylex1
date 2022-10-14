import React from "react";
import BaseLayout from "../components/BaseLayout/BaseLayout";
import TenantsLinks from "../components/BaseLayout/TenantsLinks";
import MuiTableTenants from "../components/TenantsTable/MuiTableTenants";

export default function Tenants() {
  return (
    <>
      <BaseLayout
        baseComponent={<MuiTableTenants />}
        links={<TenantsLinks />}
      />
    </>
  );
}
