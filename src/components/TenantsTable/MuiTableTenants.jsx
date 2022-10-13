import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { theme } from "../../styles/Theme";
import ModalTenants from "../Modal/ModalTenants";
import { useDispatch, useSelector } from "react-redux";
import { dataTableRedux } from "../../redux/dataTableSlice";
import { useTranslation } from "react-i18next";
import MuiTable from "../MuiTable/MuiTable";
import { test } from "../Axios/Axios";

export default function MuiTableTenants() {
  const navigate = useNavigate();

  const { t } = useTranslation();

  const dispatch = useDispatch();
  const data = JSON.parse(
    JSON.stringify(useSelector((state) => state.data.dataTable))
  );

  const handleRowClick = (_, rowData) => {
    navigate(`/callconnect/${rowData._id}`);
    console.log(rowData);
    test(rowData._id);
  };

  const columns = [
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
  ];

  useEffect(() => {
    dispatch(dataTableRedux());
  }, []);

  return (
    <Box>
      <MuiTable
        data={data}
        columns={columns}
        handleRowClick={handleRowClick}
        modal={<ModalTenants />}
      />
    </Box>
  );
}
