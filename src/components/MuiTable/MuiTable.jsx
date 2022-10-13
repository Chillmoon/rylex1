import { Box, Paper } from "@mui/material";
import MaterialTable from "material-table";
import React, { useState } from "react";
import Search from "../../images/Search";
import AddCircleOutline from "../../images/AddCircleOutline";
import { theme } from "../../styles/Theme";
import ButtonWithIcon from "../Button";
import { useButtonStyles } from "../Button/styles";
import { useTranslation } from "react-i18next";
import MyPagination from "../TenantsTable/MyPagination";
import { useTableStyles, search } from "./Style";
import Modal from "../Modal/Modal";

export default function MuiTable({ data, columns, handleRowClick, modal }) {
  const tableStyles = useTableStyles();
  const classes = useButtonStyles();

  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };

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
        onRowClick={handleRowClick}
      />
      <Modal open={isOpen} onClose={handleClose}>
        {modal}
      </Modal>
    </Box>
  );
}
