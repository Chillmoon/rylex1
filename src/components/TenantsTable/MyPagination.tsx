import React from "react";
import {
  Grid,
  IconButton,
  MenuItem,
  Box,
  Pagination,
  Select,
  Typography,
} from "@mui/material";

import { theme } from "../../styles/Theme";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ArrowSelect from "../../images/ArrowSelect";
import {
  pagination,
  paginationArrows,
  select,
  selectMenu,
  useTableStyles,
} from "../MuiTable/Style";
import { useTranslation } from "react-i18next";

type PropsPagination = {
  page: number;
  rowsPerPage: number;
  count: number;
  onChangePage: any;
  rowsPerPageOptions: () => void;
  onChangeRowsPerPage: () => void;
};

export default function MyPagination(props: PropsPagination) {
  const selectMenuStyle = selectMenu();
  const paginationClass = pagination();
  const paginationArrowsClass = paginationArrows();
  const paginationSelect = select();

  const { t } = useTranslation();

  const styles = useTableStyles();
  const {
    page,
    rowsPerPage,
    count,
    onChangePage,
    rowsPerPageOptions,
    onChangeRowsPerPage,
  } = props;

  let from = rowsPerPage * page + 1;
  let to = rowsPerPage * (page + 1);
  if (to > count) {
    to = count;
  }
  return (
    <td>
      <Grid
        container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          width: "70vw",
          marginTop: "30px",
        }}
      >
        <Select
          className={paginationSelect.root}
          value={rowsPerPage}
          onChange={onChangeRowsPerPage}
          MenuProps={{
            getContentAnchorEl: null,
            anchorOrigin: {
              vertical: "top",
              horizontal: "center",
            },
            transformOrigin: {
              horizontal: 17,
              vertical: "bottom",
            },
            className: selectMenuStyle.root,
          }}
          IconComponent={() => (
            <Box
              sx={{
                fill: theme.palette.primary.main,
                "& path": {
                  cursor: "pointer",
                  fill: theme.palette.primary.main,
                },
                fontSize: "30px",
                margin: "0px 8px 10px 8px",
              }}
            >
              <ArrowSelect />
            </Box>
          )}
        >
          {rowsPerPageOptions.map((option: any, index: any) => (
            <MenuItem value={option} key={index} disableRipple>
              {option}
            </MenuItem>
          ))}
        </Select>

        <Typography
          sx={{
            color: theme.palette.common.black,
            fontSize: "14px",
            margin: "0px 0px 0px 10px",
          }}
        >
          {t("per_page")}
        </Typography>
        <Typography
          sx={{
            color: theme.palette.common.black,
            fontSize: "14px",
            margin: "0px 66px 0px 50px",
          }}
        >
          {from}-{to} {t("of")} {count}
        </Typography>
        <IconButton
          sx={{ marginLeft: "-66px" }}
          className={paginationArrowsClass.root}
          disabled={page === 0}
          onClick={(e) => onChangePage(e, page - 1)}
        >
          <ChevronLeftIcon />
        </IconButton>
        <Pagination
          className={paginationClass.root}
          // sx={styles.pagination}
          sx={paginationClass}
          count={Math.ceil(count / rowsPerPage)}
          hidePrevButton
          hideNextButton
          page={page + 1}
          variant="outlined"
          shape="rounded"
          boundaryCount={1}
          defaultPage={1}
          onChange={(event, pageNumber) => {
            onChangePage(event, pageNumber - 1);
          }}
        />
        <IconButton
          className={paginationArrowsClass.root}
          disabled={to >= count}
          onClick={(e) => onChangePage(e, page + 1)}
        >
          <ChevronRightIcon />
        </IconButton>
      </Grid>
    </td>
  );
}

{
  /* <Pagination
          // className={classes.pagination}
          // hidePrevButton
          // hideNextButton
          shape="rounded"
          rowsPerPage={10}
          count={Math.ceil(count / rowsPerPage)}
          defaultPage={0}
          page={page}
          renderItem={(item) => <PaginationItem disableRipple {...item} />}
          onChange={onChangePage}
        /> */
}

// export default function MyPagination(props) {
//   const [pageSize, setPageSize] = useState();
//   const [pagination, setPagination] = useState();
//   return (
//     <>
//       <Pagination count={Math.ceil(props.count / props.pageSize)} />
//     </>
//   );
// }
