import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../app/store";
import { CountriesState, CountryT } from "../../types/CountryTypes";

const COUNTRIES_URL = "https://restcountries.com/v3.1/all";

const COUNTRY_URL = "https://restcountries.com/v3.1/name";

const initialState: CountriesState = {
  countries: [],
  countryDetails: [],
  isLoading: false,
  isError: false,
  message: "",
  liked: [],
};

export const fetchCountries = createAsyncThunk(
  "countries/fetchCountries",
  async () => {
    const response = await axios.get(COUNTRIES_URL);
    const data: CountryT[] = await response.data;
    return data;
  }
);

export const fetchCountry = createAsyncThunk(
  "countries/fetchCountry",
  async (country: string) => {
    const response = await axios.get(`${COUNTRY_URL}/${country}`);
    return response.data;
  }
);

export const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    likeCountry: (state, action) => {
      console.log(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCountries.fulfilled, (state, action) => {
      state.isLoading = false;
      state.countries = action.payload;
    });
    builder.addCase(fetchCountries.pending, (state, action) => {
      state.isLoading = true;
      state.message = "Loading countries";
    });
    builder.addCase(fetchCountries.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = "Failed loading countries";
    });
    builder.addCase(fetchCountry.fulfilled, (state, action) => {
      state.isLoading = false;

      state.countryDetails = action.payload;
    });
    builder.addCase(fetchCountry.pending, (state, action) => {
      state.isLoading = true;
      state.message = "Loading country";
    });
    builder.addCase(fetchCountry.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = "Failed loading country";
    });
  },
});

//export const selectCountry = (state: RootState) => state.countries.value;

export const { likeCountry } = countriesSlice.actions;

export default countriesSlice.reducer;
