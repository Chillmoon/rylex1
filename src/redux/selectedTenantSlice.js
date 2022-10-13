import React from "react";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const selectedTenantRedux = createAsyncThunk(
  "tenant/selectedTenantRedux",
  async (id, { rejectWithValue, dispatch }) => {
    const result = await axios.get(
      `https://api-shark.herokuapp.com/tenants/${id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    dispatch(setSelectedTenant(result.data));
  }
);

export const selectedTenantSlice = createSlice({
  name: "tenant",
  initialState: {
    selectedTenant: {},
  },
  reducers: {
    setSelectedTenant: (state, action) => {
      state.selectedTenant = action.payload;
    },
  },
  extraReducers: {
    [selectedTenantRedux.fulfilled]: () => console.log("fulfilled"),
    [selectedTenantRedux.pending]: () => console.log("pending"),
    [selectedTenantRedux.rejected]: () => console.log("rejected"),
  },
});

export const { setSelectedTenant } = selectedTenantSlice.actions;

export default selectedTenantSlice.reducer;
