import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const GetSalesDetails = createAsyncThunk(
  "data/SalesData",

  async () => {
    try{
      const result = await axios.get("http://localhost:8083/category/sales");
      console.log(result.data);
      return result.data;
    }catch(e){
      console.log(e)
    }
    
  }
);

export default GetSalesDetails;
