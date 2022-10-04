import { Box, Link, Paper, Typography } from "@mui/material";
import MaterialTable from "material-table";
import React, { useState, useEffect } from "react";
import Search from "../../images/Search";
import AddCircleOutline from "../../images/AddCircleOutline";
import { theme } from "../../styles/Theme";
import { tableData } from "../Axios/Axios";
import ButtonWithIcon from "../Button";
import { useStyles } from "../Input/styles";
import MyPagination from "./MyPagination";
import { search, tableSearch, useTableStyles } from "./Style";
import { useButtonStyles } from "../Button/styles";
import Modal from "../Modal/Modal";
import ModalTenants from "../Modal/ModalTenants";

export default function MuiTable() {
  const tableStyles = useTableStyles();
  const style = useStyles();
  const classes = useButtonStyles();

  useEffect(() => {
    let isMounted = true;
    tableData().then((response) => {
      if (isMounted) {
        setData(response.data.tenants);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  const [data, setData] = useState();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box sx={tableStyles.table} className={search.root}>
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
          },
          {
            title: "ID",
            field: "_id",

            cellStyle: {
              color: theme.palette.primary.greenActive,
            },
          },
          {
            title: "Name",
            field: "name",
          },
          {
            title: "Type",
            field: "type",

            headerStyle: {
              borderRadius: "0px 5px 0px 0px",
            },
          },
        ]}
        icons={{
          Search: () => <Search />,
          ResetSearch: () => "",
        }}
        options={{
          searchFieldAlignment: "left",
          searchFieldVariant: "outlined",
          // searchFieldStyle: style.searchInput,
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
            color: theme.palette.primary.white,
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
          Action: (props) => (
            <ButtonWithIcon
              {...props}
              icon={
                <Box
                  sx={{
                    width: "14px",
                    height: "14px",
                    paddingBottom: "10px",
                  }}
                >
                  <AddCircleOutline />
                </Box>
              }
              text="Add"
              onClick={() => setIsOpen(true)}
              sx={classes.button}
            />
          ),
        }}
        actions={[
          {
            isFreeAction: true,
          },
        ]}
        onRowClick={(event, rowData) => {
          // window.open("https://www.youtube.com/");
          // Get your id from rowData and use with link.
          // window.open(`mysite.com/product/${rowData.id}`, );
          // event.stopPropagation();
        }}
      />
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <ModalTenants />
      </Modal>
    </Box>
  );
}
