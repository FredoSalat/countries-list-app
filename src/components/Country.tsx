import React from "react";
import { CountryT } from "../types/CountryTypes";

type CountryProps = {
  country: CountryT;
};

function Country(props: CountryProps) {
  return (
    <div>
      <p>{props.country.name.official}</p>
    </div>
  );
}

export default Country;
