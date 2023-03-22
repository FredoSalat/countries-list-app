export interface CountryT {
  name: Name;
  flags: Flag;
  region: string;
  population: number;
  languages: Language;
}

export interface CountriesState {
  countries: CountryT[];
  countryDetails: CountryT[];
  isLoading: boolean;
  isError: boolean;
  message: string;
  liked: CountryT[];
}

export interface Name {
  common: string;
  official: string;
}

export interface Flag {
  png: string;
  alt: string;
}

export interface Language {
  [key: string]: string;
}
