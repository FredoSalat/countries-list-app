import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import {
  fetchCountries,
  searchCountry,
} from "../redux/countries/countriesSlice";

import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import CountriesTable from "../components/country/CountriesTable";

function CountriesList() {
  const { countries, isLoading, isError, message } = useAppSelector(
    (state) => state.countriesR
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  /* const [search, setSearch] = useState<string>("");
  const searchHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch((prevState) => (prevState = event.target.value));
  }; */

  const searchHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(searchCountry(event.target.value));
  };

  return (
    <>
      {isLoading && (
        <div>
          <h1>{message}</h1>
        </div>
      )}
      {isError && (
        <div>
          <h1>{message}</h1>
        </div>
      )}
      <Box
        sx={{
          mt: "1rem",
          p: "0 1rem 1rem 1rem",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <TextField
          id="standard-search"
          label="Search country"
          type="search"
          variant="standard"
          //value={"search"}
          onChange={searchHandler}
        />
      </Box>
      <CountriesTable countries={countries}></CountriesTable>
    </>
  );
}

export default CountriesList;
