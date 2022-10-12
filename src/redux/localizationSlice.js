import { createSlice } from "@reduxjs/toolkit";
import React from "react";

export const localizationSlice = createSlice({
  name: "localization",
  initialState: {
    language: "EN",
  },
  reducers: {
    setLanguage: (state, action) => {
      state.dataTable = action.payload;
    },
  },
});

export const { setLanguage } = localizationSlice.actions;

export default localizationSlice.reducer;
