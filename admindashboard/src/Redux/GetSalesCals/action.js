import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const GetSalesDetails = createAsyncThunk(
  "data/SalesData",

  async () => {
    try {
      const result = await axios.get(
        "https://adminbackend-kcks.onrender.com/category/sales"
      );
      console.log(result.data);
      return result.data;
    } catch (e) {
      console.log(e);
    }
  }
);

export default GetSalesDetails;
