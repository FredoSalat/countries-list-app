import React, { useEffect } from "react";
import { CountryT } from "../types/CountryTypes";
//import { Country } from "./Country";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { fetchCountries } from "../redux/countries/countriesSlice";
import Country from "./Country";

export function Countries() {
  const { countries, isLoading, isError, message } = useAppSelector(
    (state) => state.countriesR
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  return (
    <div>
      <h1>Countries</h1>
      <div>
        {countries.map((country) => {
          return <Country country={country} />;
        })}
      </div>
    </div>
  );
}
