import { Box, Paper } from "@mui/material";
import MaterialTable from "material-table";
import React from "react";
import Search from "../../images/Search";
import { theme } from "../../styles/Theme";
import { useTranslation } from "react-i18next";
import MyPagination from "../TenantsTable/MyPagination";
import { useTableStyles, search } from "./Style";

// type PropsMuiTable = {
//   data: any,
//   columns: any,
//   handleRowClick: any,
//   actionMenu: any,
// };

export default function MuiTable({
  data,
  columns,
  handleRowClick,
  actionMenu,
}) {
  const tableStyles = useTableStyles();

  const { t } = useTranslation();

  return (
    <Box sx={tableStyles.table} className={search.root}>
      <MaterialTable
        title={null}
        data={data}
        columns={columns}
        icons={{
          Search: () => <Search />,
          ResetSearch: () => "",
        }}
        localization={{
          toolbar: {
            searchPlaceholder: `${t("search")}`,
          },
        }}
        options={{
          searchFieldAlignment: "left",
          searchFieldVariant: "outlined",
          draggable: false,
          sorting: false,
          paging: true,
          emptyRowsWhenPaging: true,
          pageSizeOptions: [10, 25, 100],
          pageSize: 10,
          paginationType: "stepped",
          showFirstLastPageButtons: false,
          headerStyle: {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.common.white,
            fontSize: "16px",
            cursor: "default",
          },
          rowStyle: tableStyles.row,
        }}
        components={{
          Container: (props) => <Paper {...props} elevation={0} />,
          Pagination: (props) => {
            return <MyPagination {...props} />;
          },
          Action: (_props) => actionMenu,
        }}
        actions={[
          {
            isFreeAction: true,
          },
        ]}
        onRowClick={handleRowClick}
      />
    </Box>
  );
}
