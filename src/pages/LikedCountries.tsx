import React from "react";
import { useAppSelector } from "../app/hooks";
import CountriesTable from "../components/country/CountriesTable";
import Typography from "@mui/material/Typography";

function LikedCountries() {
  const { liked } = useAppSelector((state) => state.countriesR);

  return (
    <>
      {liked.length > 0 ? (
        <CountriesTable countries={liked}></CountriesTable>
      ) : (
        <Typography variant="h5" sx={{ p: 4 }}>
          Your list of liked countries is empty
        </Typography>
      )}
    </>
  );
}

export default LikedCountries;
