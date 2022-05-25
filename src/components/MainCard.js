import React, { useState, useContext } from "react";
import styles from "./MainCard.module.css";
import Card from "./UI/Card";
import jeremyImage from "../assets/image-jeremy.png";

const MainCard = (props) => {

  //display "active" state of timeframe dynamically
  const [dailyIsActive, setDailyIsActive] = useState(true);
  const [weeklyIsActive, setWeeklyIsActive] = useState(false);
  const [monthlyIsActive, setMonthlyIsActive] = useState(false);

  const timeFrames = [
    { id: 1, type: "Daily", active: dailyIsActive },
    { id: 2, type: "Weekly", active: weeklyIsActive },
    { id: 3, type: "Monthly", active: monthlyIsActive },
  ];

  const clickHandler = (event) => {
    const clickedTimeframe = event.target.innerText.toLowerCase();
    switch (clickedTimeframe) {
      case "daily":
        setDailyIsActive(true);
        setWeeklyIsActive(false);
        setMonthlyIsActive(false);
        break;
      case "weekly":
        setWeeklyIsActive(true);
        setDailyIsActive(false);
        setMonthlyIsActive(false);
        break;
      case "monthly":
        setMonthlyIsActive(true);
        setDailyIsActive(false);
        setWeeklyIsActive(false);
        break;
      default:
        setDailyIsActive(true);
        setWeeklyIsActive(false);
        setMonthlyIsActive(false);
        break;
    }
    props.onChangeTimeframe(clickedTimeframe);
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
        {timeFrames.map((timeFrame) => (
          <p
            onClick={clickHandler.bind(this)}
            key={timeFrame.id}
            className={timeFrame.active ? `${styles.active}` : ""}
          >
            {timeFrame.type}
          </p>
        ))}
      </sub>
    </Card>
  );
};

export default MainCard;
