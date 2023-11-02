import { createSlice } from "@reduxjs/toolkit";
import GetSalesDetails from "./action";

const initialState = {
  data1: [],
  data2: [],
  data3: [],
  revCount: {},
  loading: true,
  error: "",
};

const salesSlice = createSlice({
  name: "salesData",
  initialState: initialState,

  reducers: {
    setSalesData: (state, action) => {
      state.salesData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(GetSalesDetails.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(GetSalesDetails.fulfilled, (state, action) => {
      state.data1 = action.payload.getFashion;
      state.data2 = action.payload.getElectronics;
      state.data3 = action.payload.getHome;
      state.revCount = action.payload;
      state.loading = false;
    });
    builder.addCase(GetSalesDetails.rejected, (state, action) => {
      state.error = "Something Went Wrong";
    });
  },
});

export const { setSalesData } = salesSlice.actions;
export default salesSlice.reducer;
