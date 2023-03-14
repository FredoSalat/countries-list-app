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
    <>
      <h1>Countries</h1>
      <table>
        <thead>
          <tr>
            <th>Flag</th>
            <th>Name</th>
            <th>Region</th>
            <th>Population</th>
            <th>Languages</th>
          </tr>
          {countries.map((country, index) => {
            return <Country country={country} key={index} />;
          })}
        </thead>
      </table>
    </>
  );
}
