import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  fetchCountries,
  likeCountry,
} from "../../redux/countries/countriesSlice";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { CountryT } from "../../types/CountryTypes";

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

  const onLikeClickHandler = (country: CountryT) => {
    dispatch(likeCountry(country));
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="subtitle2">
                <strong>Flag</strong>
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle2">
                <strong>Name</strong>
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle2">
                <strong>Region</strong>
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle2">
                <strong>Population</strong>
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle2">
                <strong>Language</strong>
              </Typography>
            </TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
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
              <TableCell>{country.name.official}</TableCell>
              <TableCell>{country.region}</TableCell>
              <TableCell>{country.population}</TableCell>
              <TableCell>
                {country.languages ? listLanguages(country.languages) : ""}
              </TableCell>
              <TableCell>
                <Tooltip title="Like" placement="left" arrow>
                  <IconButton
                    sx={{ "&:hover": { color: "red" } }}
                    aria-label=""
                    onClick={() => {
                      onLikeClickHandler(country);
                    }}
                  >
                    <FavoriteIcon />
                  </IconButton>
                </Tooltip>
              </TableCell>
              <TableCell>
                <IconButton
                  sx={{ "&:hover": { color: "black" } }}
                  aria-label=""
                  component={Link}
                  to="/country-page"
                  state={country.name.common}
                >
                  <ArrowForwardIosIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CountriesList;
