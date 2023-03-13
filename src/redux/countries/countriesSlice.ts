import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../app/store";
import { CountriesState, CountryT } from "../../types/CountryTypes";

const API_URL = "https://restcountries.com/v3.1/all";

const initialState: CountriesState = {
  countries: [],
  isLoading: false,
  isError: false,
  message: "",
};

export const fetchCountries = createAsyncThunk(
  "countries/fetchCountries",
  async () => {
    const response = await axios.get(API_URL);
    const data: CountryT[] = await response.data;
    return data;
  }
);

export const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCountries.fulfilled, (state, action) => {
      state.countries = action.payload;
    });
  },
});

//export const selectCountry = (state: RootState) => state.countries.value;

export default countriesSlice.reducer;
