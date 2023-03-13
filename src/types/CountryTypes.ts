export interface CountryT {
  name: Name;
  population: number;
  language: string;
}

export interface CountriesState {
  countries: CountryT[];
  isLoading: boolean;
  isError: boolean;
  message: string;
}

export interface Name {
  common: string;
  official: string;
}
