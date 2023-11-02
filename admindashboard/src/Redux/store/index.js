import { configureStore } from "@reduxjs/toolkit";
import salesSlice from "../GetSalesCals/slice";
const store = configureStore({
  reducer: {
    salesData: salesSlice,
  },
});

export default store;
