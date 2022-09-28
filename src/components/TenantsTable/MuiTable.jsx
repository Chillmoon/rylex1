import { Box, Pagination, Paper } from "@mui/material";
import MaterialTable from "material-table";
import React, { useState, useEffect } from "react";
import { theme } from "../../styles/Theme";
import { tableData } from "../Axios";
import { useStyles } from "../Input/styles";
import MyPagination from "./MyPagination";
import { useTableStyles } from "./Style";

export default function MuiTable() {
  const classes = useStyles();
  const tableStyles = useTableStyles();

  useEffect(() => {
    tableData().then((response) => setData(response.data.tenants));
  }, []);

  const [data, setData] = useState();

  return (
    <Box sx={tableStyles.table}>
      <MaterialTable
        title={null}
        data={data}
        columns={[
          {
            title: "№",
            render: (rowData) => rowData.tableData.id + 1,
            width: "10%",

            headerStyle: {
              borderRadius: "5px 0px 0px 0px",
            },
            cellStyle: {
              borderRight: `1px solid ${theme.palette.secondary.main}`,
              boxShadow: ` 1px 0px 0px inset ${theme.palette.secondary.main}`,
            },
          },
          {
            title: "ID",
            field: "_id",

            cellStyle: {
              borderRight: `1px solid ${theme.palette.secondary.main}`,
            },
          },
          {
            title: "Name",
            field: "name",

            cellStyle: {
              borderRight: `1px solid ${theme.palette.secondary.main}`,
            },
          },
          {
            title: "Type",
            field: "type",

            headerStyle: {
              borderRadius: "0px 5px 0px 0px",
            },
            cellStyle: {
              borderRight: `1px solid ${theme.palette.secondary.main}`,
            },
          },
        ]}
        options={{
          searchFieldAlignment: "left",
          searchFieldVariant: "outlined",
          searchFieldStyle: classes.searchInput,
          // searchFieldStyle: {
          //   background: theme.palette.primary.white,
          //   disableUnderline: true,
          //   border: "none",
          //   paddingLeft: "0 !mportant",
          // },

          paging: true,
          pageSizeOptions: [10, 25, 100],
          pageSize: 10,
          paginationType: "stepped",
          showFirstLastPageButtons: false,
          headerStyle: {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.white,
          },
          rowStyle: {
            "&:hover": {
              border: "none",
              backgroundColor: theme.palette.secondary.lightGreen,
            },
          },
        }}
        components={{
          Container: (props) => <Paper {...props} elevation={0} />,
          Pagination: (props) => {
            return <MyPagination {...props} />;
          },
        }}
      />
    </Box>
  );
}
