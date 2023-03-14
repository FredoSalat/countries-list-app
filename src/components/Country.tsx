import React from "react";
import { CountryT } from "../types/CountryTypes";

type CountryProps = {
  country: CountryT;
};

const objectToList = (object: Object) => {
  const values = Object.values(object);
  return (
    <ul>
      {values.map((value: string, index: number) => (
        <li key={index}>{value}</li>
      ))}
    </ul>
  );
};

function Country(props: CountryProps) {
  return (
    <tr>
      <td>
        <img
          src={props.country.flags.png}
          alt={props.country.flags.alt}
          width="120"
          height="80"
        />
      </td>
      <td>{props.country.name.official}</td>
      <td>{props.country.region}</td>
      <td>{props.country.population}</td>
      <td>
        {props.country.languages ? objectToList(props.country.languages) : ""}
      </td>
    </tr>
  );
}

export default Country;
