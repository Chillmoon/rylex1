import { configureStore } from "@reduxjs/toolkit";
import tableDataReducer from "./tableDataSlice";

export default configureStore({
  reducer: {
    data: tableDataReducer,
  },
});
