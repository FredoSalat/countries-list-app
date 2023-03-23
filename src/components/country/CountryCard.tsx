import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { grey } from "@mui/material/colors";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React from "react";
import { Box } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { CardT } from "../../types/cardTypes";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function Country(props: CardT) {
  const { countries } = props;
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box sx={{ minHeight: "82vh" }}>
      {countries.map((country, index) => (
        <Card
          key={index}
          sx={{
            m: "1rem auto",
            width: {
              lg: "45vw",
              md: "55vw",
              sm: "70vw",
              xs: "90vw",
            },
          }}
        >
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: grey[500] }} aria-label="recipe">
                {Array.from(country.name.common)[0]}
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={country.name.common}
            subheader={country.capital}
          />
          <CardMedia
            component="img"
            height="194"
            image={country.flags.png}
            alt={country.flags.alt}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              The country belongs to {country.region} region and{" "}
              {country.subregion} sub-region. Located at the.
              {country.latlng[0].toFixed(2)}&deg;N and{" "}
              {country.latlng[1].toFixed(2)}&deg;W, this country has population
              of {country.population}.{` `}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites" href="/list">
              <KeyboardArrowLeftIcon fontSize="large" />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Capital: {country.capital}</Typography>
            </CardContent>
          </Collapse>
        </Card>
      ))}
    </Box>
  );
}

export default Country;
