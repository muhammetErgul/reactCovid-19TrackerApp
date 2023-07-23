import { createSlice } from "@reduxjs/toolkit";
import { fetchData, fetchDataByCountry } from "./Services";

export const covidSlice = createSlice({
  name: "covid",
  initialState: {
    items: [],
    currentData: "Total",
  },

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (state, actions) => {
        state.items = actions.payload;
      })
      .addCase(fetchDataByCountry.fulfilled, (state, actions) => {
        state.items = actions.payload;
      });
  },
});

export const selectItems = (state) => state.covid.items;
export default covidSlice.reducer;
