import React from "react";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const selectedTenantRedux = createAsyncThunk<void, string>(
  "tenant/selectedTenantRedux",
  async (id, { dispatch }) => {
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
    [selectedTenantRedux.fulfilled.type]: (boolean) => console.log("fulfilled"),
    [selectedTenantRedux.pending.type]: (boolean) => console.log("pending"),
    [selectedTenantRedux.rejected.type]: (boolean) => console.log("rejected"),
  },
});

export const { setSelectedTenant } = selectedTenantSlice.actions;

export default selectedTenantSlice.reducer;
