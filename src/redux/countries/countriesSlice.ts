import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { CountriesState, LikedType } from "../../types/slicerTypes";
import { CountryT } from "../../types/countryTypes";
import { RootState } from "../../app/store";

const COUNTRIES_URL = "https://restcountries.com/v3.1/all";

const COUNTRY_URL = "https://restcountries.com/v3.1/name";

const initialState: CountriesState = {
  countries: [],
  countryDetails: [],
  isLoading: false,
  isError: false,
  message: "",
  liked: [],
  searchTerm: "",
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
    likeCountry: (state, action: LikedType) => {
      const existingCountry = state.liked.find(
        (country) => country.name.common === action.payload.name.common
      );
      if (existingCountry) {
        state.liked = state.liked.filter(
          (country) => country.name.common !== action.payload.name.common
        );
      } else {
        const likedCountry = { ...action.payload, isLiked: true };
        state.liked = [...state.liked, likedCountry];
      }
    },
    searchCountry: (state, { payload }) => {
      state.searchTerm = payload;
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

export const { likeCountry, searchCountry } = countriesSlice.actions;

export const selectLiked = (state: RootState) => state.countriesR.liked;

export default countriesSlice.reducer;
