import { Box, Paper } from "@mui/material";
import MaterialTable from "material-table";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Search from "../../images/Search";
import AddCircleOutline from "../../images/AddCircleOutline";
import { theme } from "../../styles/Theme";
import ButtonWithIcon from "../Button";
import { useStyles } from "../Input/styles";
import MyPagination from "./MyPagination";
import { search, useTableStyles } from "./Style";
import { useButtonStyles } from "../Button/styles";
import Modal from "../Modal/Modal";
import ModalTenants from "../Modal/ModalTenants";
import { useDispatch, useSelector } from "react-redux";
import { dataTableRedux } from "../../redux/dataTableSlice";
import { selectedTenantRedux } from "../../redux/selectedTenantSlice";
import { useTranslation } from "react-i18next";

export default function MuiTable() {
  const navigate = useNavigate();
  const tableStyles = useTableStyles();
  const style = useStyles();
  const classes = useButtonStyles();

  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const dispatch = useDispatch();
  const data = JSON.parse(
    JSON.stringify(useSelector((state) => state.data.dataTable))
  );

  useEffect(() => {
    dispatch(dataTableRedux());
  }, []);

  // useEffect(() => {
  //   let isMounted = true;
  //   tableData().then((response) => {
  //     if (isMounted) {
  //       console.log(response);
  //       setData(response.data.tenants);
  //     }
  //   });
  //   return () => {
  //     isMounted = false;
  //   };
  // }, []);

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
            title: `${t("id")}`,
            field: "_id",

            cellStyle: {
              color: theme.palette.primary.greenActive,
            },
          },
          {
            title: `${t("name")}`,
            field: "name",
          },
          {
            title: `${t("type")}`,
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
        localization={{
          toolbar: {
            searchPlaceholder: `${t("search")}`,
          },
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
              text={t("add")}
              onClick={() => setIsOpen(true)}
              sx={classes.button}
            />
          ),
        }}
        actions={[
          {
            isFreeAction: true,
            onClick: () => {
              setIsOpen(true);
            },
          },
        ]}
        onRowClick={(event, rowData) => {
          dispatch(selectedTenantRedux(rowData._id));
          navigate(`/callconnect`);

          //callback function
        }}

        // onRowClick={(event, rowData) => {
        //   dispatch(setSelectedTenant(rowData));
        //   navigate("/callconnect");
        //   // window.open("https://www.youtube.com/");
        //   // Get your id from rowData and use with link.
        //   // window.open(`mysite.com/product/${rowData.id}`, );
        //   // event.stopPropagation();
        // }}
      />
      <Modal open={isOpen} onClose={handleClose}>
        <ModalTenants onClose={handleClose} />
      </Modal>
    </Box>
  );
}
