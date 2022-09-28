import {
  Grid,
  IconButton,
  Pagination,
  PaginationItem,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import { theme } from "../../styles/Theme";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useButtonStyles } from "../Button/styles";

export default function MyPagination(props) {
  const classes = useButtonStyles();
  const { page, rowsPerPage, count, onChangePage } = props;
  let from = rowsPerPage * page + 1;
  let to = rowsPerPage * (page + 1);
  if (to > count) {
    to = count;
  }
  return (
    <td>
      <Grid container alignItems="center" justify="flex-end">
        <Grid item>
          <Typography
            variant="caption"
            sx={{ color: theme.palette.primary.black }}
          >
            {from}-{to} of {count}
          </Typography>
        </Grid>

        <IconButton
          sx={classes.iconButton}
          disabled={page === 0}
          onClick={(e) => onChangePage(e, page - 1)}
          fontSize="small"
        >
          <ChevronLeftIcon />
        </IconButton>

        {/* <Pagination
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
        /> */}

        <IconButton
          disabled={to >= count}
          onClick={(e) => onChangePage(e, page + 1)}
          sx={classes.iconButton}
          fontSize="small"
        >
          <ChevronRightIcon />
        </IconButton>
      </Grid>
    </td>
  );
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
