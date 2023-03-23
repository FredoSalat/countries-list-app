import { Button } from "@mui/material";
import React from "react";

function HomePage() {
  return (
    <div>
      {" "}
      <Button sx={{ mt: "20px" }} variant="contained" href="/list">
        Go to countries page
      </Button>
    </div>
  );
}

export default HomePage;
