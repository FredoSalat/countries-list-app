import { Link } from "react-router-dom";
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
import { TableSortLabel } from "@mui/material";
import { TableT } from "../../types/tableTypes";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { likeCountry } from "../../redux/countries/countriesSlice";
import { CountryT } from "../../types/countryTypes";
import { useState, useCallback } from "react";

type SortKeys = keyof CountryT;

type SortOrder = "ascn" | "desc";

function sortData(
  tableData,
  sortKey,
  reverse
): {
  tableData: TableT;
  sortKey: SortKeys;
};

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

function CountriesTable(props: TableT) {
  const [sortKey, setSortKey] = useState<SortKeys>("name");
  const [sortOrder, setSortOrder] = useState<SortOrder>("ascn");

  const headers = [
    { key: "flag", label: "Flag" },
    { key: "name", label: "Name" },
    { key: "region", label: "Region" },
    { key: "population", label: "Population" },
    { key: "language", label: "Language" },
    { key: "", label: "" },
    { key: "", label: "" },
  ];

  const sortedData = useCallback(
    () =>
      sortData({ tableData: TableT, sortKey, reverse: sortOrder === "desc" }),
    []
  );

  const { countries } = props;

  const { searchTerm } = useAppSelector((state) => state.countriesR);

  const dispatch = useAppDispatch();

  const onLikeClickHandler = (country: CountryT) => {
    dispatch(likeCountry(country));
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {headers.map((row) => {
              return (
                <TableCell key={row.key}>
                  <Typography variant="subtitle2">
                    <strong>{row.label}</strong>
                  </Typography>
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {countries
            .filter((searchResult) => {
              if (searchTerm === "") {
                return searchResult;
              } else if (
                searchResult.name.common
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
              ) {
                return searchResult;
              }
            })
            .map((country, index) => (
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
                <TableCell>{country.name.common}</TableCell>
                <TableCell>{country.region}</TableCell>
                <TableCell>{country.population}</TableCell>
                <TableCell>
                  {country.languages ? listLanguages(country.languages) : ""}
                </TableCell>
                <TableCell>
                  <Tooltip title="Like" placement="left" arrow>
                    <IconButton
                      onClick={() => {
                        onLikeClickHandler(country);
                      }}
                    >
                      <FavoriteIcon
                        sx={{
                          color: country.isLiked
                            ? "custom.main"
                            : "primary.light",
                        }}
                      ></FavoriteIcon>
                    </IconButton>
                  </Tooltip>
                </TableCell>
                <TableCell>
                  <IconButton
                    sx={{ "&:hover": { color: "black" } }}
                    aria-label=""
                    component={Link}
                    to="/country"
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

export default CountriesTable;
