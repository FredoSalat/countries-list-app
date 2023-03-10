import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../app/store";

const API_URL = "https://restcountries.com/v3.1/all";

const initialState = {
  countries: [],
};

export const fetchCountries = createAsyncThunk(
  "countries/fetchCountries",
  async (_, thunkAPI) => {
    const response = await axios.get(API_URL);
    const data = await response.data;
    return data;
  }
);

export const countrySlice = createSlice({
  name: "countries",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCountries.fulfilled, (state, action) => {});
  },
});

//export const selectCountry = (state: RootState) => state.countries.value;

export default countrySlice.reducer;
