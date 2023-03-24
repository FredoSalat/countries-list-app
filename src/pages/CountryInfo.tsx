import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchCountry } from "../redux/countries/countriesSlice";
import CountryCard from "../components/country/CountryCard";

function CountryInfo() {
  const { countryDetails, isLoading, isError, message } = useAppSelector(
    (state) => state.countriesR
  );

  const { state: countryName } = useLocation();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCountry(countryName));
  }, [countryName, dispatch]);

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
      )}{" "}
      <CountryCard countries={countryDetails}></CountryCard>;
    </>
  );
}

export default CountryInfo;
