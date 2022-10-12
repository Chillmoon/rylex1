import { configureStore } from "@reduxjs/toolkit";
import dataTableSlice from "./dataTableSlice";
import localizationSlice from "./localizationSlice";
import selectedTenantSlice from "./selectedTenantSlice";

export const store = configureStore({
  reducer: {
    data: dataTableSlice,
    tenant: selectedTenantSlice,
    language: localizationSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
