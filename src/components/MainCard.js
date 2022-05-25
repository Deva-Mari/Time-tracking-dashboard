import React, { useState } from "react";
import styles from "./MainCard.module.css";
import Card from "./UI/Card";
import jeremyImage from "../assets/image-jeremy.png";

const MainCard = (props) => {
  //display "active" state of timeframe dynamically
  const [selectedTimeframe, setSelectedTimeframe] = useState("Daily");

  const availableTimeframes = [
    { id: 1, type: "Daily" },
    { id: 2, type: "Weekly" },
    { id: 3, type: "Monthly" },
  ];

  const clickHandler = (event) => {
    setSelectedTimeframe(event.target.innerText); //mark as selected to set className
    const clickedTimeframe = event.target.innerText.toLowerCase();
    props.onChangeTimeframe(clickedTimeframe); //transmit clickedTimeframe to App.js to be used by Timecards.js
  };

  return (
    <Card className={styles["main-card"]}>
      <header>
        <img src={jeremyImage} alt="Jeremy Robson" />
        <article>
          <p>Report for</p>
          <h1>Jeremy Robson</h1>
        </article>
      </header>
      <sub>
        {availableTimeframes.map((timeframe) => (
          <p
            onClick={clickHandler.bind(this)}
            key={timeframe.id}
            className={timeframe.type === selectedTimeframe ? `${styles.active}` : ""}
          >
            {timeframe.type}
          </p>
        ))}
      </sub>
    </Card>
  );
};

export default MainCard;
