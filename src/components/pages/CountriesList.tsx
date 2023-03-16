import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { fetchCountries } from "../../redux/countries/countriesSlice";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Flag</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Region</TableCell>
            <TableCell align="right">Population</TableCell>
            <TableCell align="right">Language</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
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
          {countries.map((country, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <img
                  src={country.flags.png}
                  alt={country.flags.alt}
                  width="120"
                  height="80"
                />
              </TableCell>
              <TableCell align="right">{country.name.official}</TableCell>
              <TableCell align="right">{country.region}</TableCell>
              <TableCell align="right">{country.population}</TableCell>
              <TableCell align="right">
                {country.languages ? listLanguages(country.languages) : ""}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CountriesList;
