import React from "react";
import { createSlice } from "@reduxjs/toolkit";

export const tableDataSlice = createSlice({
  name: "data",
  initialState: {
    tableData: [],
  },
  reducers: {
    update: (state, action) => {
      state.tableData = action.payload.tableData;
    },
  },
});

export const { update } = tableDataSlice.actions;
export default tableDataSlice.reducer;
