import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("covid/fetchData", async () => {
  try {
    const { data } = await axios("https://covid-api.com/api/reports/total");
    return data.data;
  } catch (error) {
    console.log(error);
  }
});

export const fetchDataByCountry = createAsyncThunk(
  "covid/fetchDataByCountry",
  async (countryName) => {
    try {
      const { data } = await axios(
        `https://covid-api.com/api/reports?date=2020-04-16&iso=${countryName}&per_page=1`
      );
      return data.data[0];
    } catch (error) {
      console.log(error);
    }
  }
);
