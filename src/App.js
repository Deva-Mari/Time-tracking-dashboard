import React, {useState} from "react";
import Grid from "./components/UI/Grid";
import MainCard from "./components/MainCard";
import TimeCards from "./components/TimeCards";
import Attribution from "./components/Attribution";

function App() {
  // get selected timeframe from mainCard and relay info to TimeCard
  const [selectedTimeframe, setSelectedTimeframe] = useState("daily");
  const changeTimeframeHandler = (timeframe) =>{
    setSelectedTimeframe(timeframe)
  }
  return (
    <React.Fragment>
      <Grid>
          <MainCard onChangeTimeframe={changeTimeframeHandler} />
          <TimeCards selectedTimeframe={selectedTimeframe}/>
      </Grid>
      <Attribution />
    </React.Fragment>
  );
}

export default App;
