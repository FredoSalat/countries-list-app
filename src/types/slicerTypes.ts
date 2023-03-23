import { CountryT } from "./countryTypes";

export interface CountriesState {
  countries: CountryT[];
  countryDetails: CountryT[];
  isLoading: boolean;
  isError: boolean;
  message: string;
  liked: CountryT[];
}
