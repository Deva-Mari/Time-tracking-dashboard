import React from "react";
import Grid from "./components/UI/Grid";
import MainCard from "./components/MainCard";
import TimeCards from "./components/TimeCards";
import Attribution from "./components/Attribution";

function App() {
  return (
    <React.Fragment>
      <Grid>
        <MainCard />
        <TimeCards/>
      </Grid>
      <Attribution />
    </React.Fragment>
  );
}

export default App;
