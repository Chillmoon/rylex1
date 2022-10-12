import React from "react";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const dataTableRedux = createAsyncThunk(
  "data/dataTableRedux",
  async (_, { rejectWithValue, dispatch }) => {
    // i can dispatch actions from here
    const result = await axios.get("https://api-shark.herokuapp.com/tenants", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    dispatch(setDataTableRedux(result.data.tenants));
  }
);

export const dataTableSlice = createSlice({
  name: "data",
  initialState: {
    dataTable: [],
  },
  reducers: {
    setDataTableRedux: (state, action) => {
      state.dataTable = action.payload;
    },
  },
  extraReducers: {
    [dataTableRedux.fulfilled]: () => console.log("fulfilled"),
    [dataTableRedux.pending]: () => console.log("pending"),
    [dataTableRedux.rejected]: () => console.log("rejected"),
  },
});

export const { setDataTableRedux } = dataTableSlice.actions;

export default dataTableSlice.reducer;
