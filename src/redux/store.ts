import { configureStore } from "@reduxjs/toolkit";
import dataTableSlice from "./dataTableSlice";
import selectedTenantSlice from "./selectedTenantSlice";

export const store = configureStore({
  reducer: {
    data: dataTableSlice,
    tenant: selectedTenantSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
