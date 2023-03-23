import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchCountry } from "../../redux/countries/countriesSlice";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function Country() {
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
      )}

      {countryDetails.map((country, index) => (
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={country.flags.png}
              alt={country.flags.alt}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {country.name.common}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {country.name.common} belongs to {country.region}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </>
  );
}

export default Country;
