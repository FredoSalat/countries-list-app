import React from "react";
import { useAppSelector } from "../app/hooks";

function LikedCountries() {
  const { liked } = useAppSelector((state) => state.countriesR);

  console.log(liked);

  return (
    <div>
      {liked.length > 0 ? (
        liked.map((country, index) => <div>{country.name.common}</div>)
      ) : (
        <div>No Liked countries</div>
      )}
    </div>
  );
}

export default LikedCountries;
