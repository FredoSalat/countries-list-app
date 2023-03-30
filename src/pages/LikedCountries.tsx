import React from "react";
import { useAppSelector } from "../app/hooks";
import CountriesTable from "../components/country/CountriesTable";
/* import { selectLiked } from "../redux/countries/countriesSlice";
 */
function LikedCountries() {
  const { liked } = useAppSelector((state) => state.countriesR);
  /*   const liked = useAppSelector(selectLiked);
   */
  console.log(liked);

  return (
    <>
      {liked.length > 0 ? (
        <CountriesTable countries={liked}></CountriesTable>
      ) : (
        <div>No Liked countries</div>
      )}
    </>
  );
}

export default LikedCountries;
