import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { fetchCountries } from "../../redux/countries/countriesSlice";

const listLanguages = (object: Object) => {
  const languagesList = Object.values(object); // converting object to array
  return (
    <ul>
      {languagesList.map((value: string, index: number) => (
        <li key={index}>{value}</li>
      ))}
    </ul>
  );
};

function CountriesList() {
  const { countries, isLoading, isError, message } = useAppSelector(
    (state) => state.countriesR
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  return (
    <div className="countries">
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
            return (
              <tr key={index}>
                <td>
                  <img
                    src={country.flags.png}
                    alt={country.flags.alt}
                    width="120"
                    height="80"
                  />
                </td>
                <td>{country.name.official}</td>
                <td>{country.region}</td>
                <td>{country.population}</td>
                <td>
                  {country.languages ? listLanguages(country.languages) : ""}
                </td>
                <td>Heart</td>
                <td>
                  <Link to="/country-page" className="navbar">
                    Country Page
                  </Link>
                </td>
              </tr>
            );
          })}
        </thead>
      </table>
    </div>
  );
}

export default CountriesList;
