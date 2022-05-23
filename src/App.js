import React from "react";
import MainCard from "./components/MainCard";
import TimeCard from "./components/TimeCard";
import Attribution from "./components/Attribution";
import data from './data/data.json';

function App() {
  return (
    <React.Fragment>
      <MainCard/>
      <ul>
        {data.map((item) =>(
          <TimeCard 
          key={Math.random().toString()}
          title={item.title}
          timeframes={item.timeframes}
          />
        ))}
        
      </ul>
      <Attribution/>
    </React.Fragment>
    // <div>
    //     Report for
    //   Jeremy Robson

    //   Daily
    //   Weekly
    //   Monthly

    //   Work
    //   5hrs {/* daily */}
    //   Previous - 7hrs {/* daily */}
    //   32hrs {/* weekly */}
    //   Previous - 36hrs {/* weekly */}

    //   103hrs {/* monthly */}
    //   Previous - 128hrs {/* monthly */}

    //   Play
    //   1hr {/* daily */}
    //   Previous - 2hrs {/* daily */}
    //   10hrs {/* weekly */}
    //   Previous - 8hrs {/* weekly */}
    //   23hrs {/* monthly */}
    //   Previous - 29hrs {/* monthly */}

    //   Study
    //   0hrs {/* daily */}
    //   Previous - 1hr {/* daily */}
    //   4hrs {/* weekly */}
    //   Previous - 7hrs {/* weekly */}
    //   13hrs {/* monthly */}
    //   Previous - 19hrs {/* monthly */}

    //   Exercise
    //   1hr {/* daily */}
    //   Previous - 1hr {/* daily */}
    //   4hrs {/* weekly */}
    //   Previous - 5hrs {/* weekly */}
    //   11hrs {/* monthly */}
    //   Previous - 18hrs {/* monthly */}

    //   Social
    //   1hr {/* daily */}
    //   Previous - 3hrs {/* daily */}
    //   5hrs {/* weekly */}
    //   Previous - 10hrs {/* weekly */}
    //   21hrs {/* monthly */}
    //   Previous - 23hrs {/* monthly */}

    //   Self Care
    //   0hrs {/* daily */}
    //   Previous - 1hr {/* daily */}
    //   2hrs {/* weekly */}
    //   Previous - 2hrs {/* weekly */}
    //   7hrs {/* monthly */}
    //   Previous - 11hrs {/* monthly */}


    // </div>
  );
}

export default App;
