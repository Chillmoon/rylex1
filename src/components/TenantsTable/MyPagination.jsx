import { Grid, IconButton, Pagination, Typography } from "@mui/material";
import React, { useState } from "react";
import ArrowLeft from "../../images/ArrowLeft";
import ArrowRight from "../../images/ArrowRight";
import { theme } from "../../styles/Theme";

export default function MyPagination(props) {
  const { page, rowsPerPage, count, onChangePage } = props;
  let from = rowsPerPage * page + 1;
  let to = rowsPerPage * (page + 1);
  if (to > count) {
    to = count;
  }
  return (
    <td>
      <Grid
        container
        alignItems="center"
        justify="flex-end"
        style={{ paddingTop: 8 }}
      >
        <Grid item>
          <IconButton
            disabled={page === 0}
            onClick={(e) => onChangePage(e, page - 1)}
          >
            <ArrowLeft
              fontSize="small"
              color={
                page === 0
                  ? theme.palette.grey.grey
                  : theme.palette.primary.main
              }
            />
          </IconButton>
        </Grid>
        <Grid item>
          <Typography
            variant="caption"
            style={{ color: theme.palette.primary.white }}
          >
            {from}-{to} of {count}
          </Typography>
        </Grid>
        <Grid item>
          <IconButton
            disabled={to >= count}
            onClick={(e) => onChangePage(e, page + 1)}
          >
            <ArrowRight
              fontSize="small"
              color={
                to < count
                  ? theme.palette.primary.main
                  : theme.palette.grey.grey
              }
            />
          </IconButton>
        </Grid>
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
