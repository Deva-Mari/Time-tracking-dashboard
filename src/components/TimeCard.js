import React, { useState } from "react";
import styles from "./TimeCard.module.css";
import Card from "./UI/Card";
import ellipsis from "../assets/icon-ellipsis.svg";

const TimeCard = (props) => {
  // showing data for selected timeframe (day/week/month)
  let current;
  let previous;
  let prevText;
  switch (props.selectedTimeframe) {
    case "daily":
      current = props.timeframes.daily.current;
      previous = props.timeframes.daily.previous;
      prevText = "Yesterday";
      break;
    case "weekly":
      current = props.timeframes.weekly.current;
      previous = props.timeframes.weekly.previous;
      prevText = "Last Week";
      break;
    case "monthly":
      current = props.timeframes.monthly.current;
      previous = props.timeframes.monthly.previous;
      prevText = "Last Month";
      break;
    default:
      current = props.timeframes.daily.current;
      previous = props.timeframes.daily.previous;
      prevText = "Yesterday";
      break;
  }

  // get browser width to dynamically display timeframe position
  const w = window.innerWidth;

  // importing background image conditionally
  const [bgImage, setBgImage] = useState("");
  let imgName = props.title.toLowerCase().replace(" ", "-");
  import(`../assets/icon-${imgName}.svg`).then((image) =>
    setBgImage(image.default)
  );

  //choose color based on title
  let bgColor;
  switch (props.title) {
    case "Work":
      bgColor = "hsl(15, 100%, 70%)";
      break;
    case "Play":
      bgColor = "hsl(195, 74%, 62%)";
      break;
    case "Study":
      bgColor = "hsl(348, 100%, 68%)";
      break;
    case "Exercise":
      bgColor = "hsl(145, 58%, 55%)";
      break;
    case "Social":
      bgColor = "hsl(264, 64%, 52%)";
      break;
    case "Self Care":
      bgColor = "hsl(43, 84%, 65%)";
      break;
    default:
      bgColor = "hsl(195, 74%, 62%)";
  }

  return (
    <li className={styles["time-card"]}>
      <Card>
        <article style={{ backgroundColor: bgColor }}>
          <div className={styles["img-container"]}>
            <img src={bgImage} alt="" />
          </div>
          <div className={styles.content}>
            <div className={styles.left}>
              <p>{props.title}</p>
              <p>{current}hrs</p>
              {w > 375 && (
                <p className={styles.timeframes}>
                  {prevText} - {previous}hrs
                </p>
              )}
            </div>
            <div className={styles.right}>
              <img src={ellipsis} alt="more" />
              {w <= 375 && (
                <p className={styles.timeframes}>
                  {prevText} - {previous}hrs
                </p>
              )}
            </div>
          </div>
        </article>
      </Card>
    </li>
  );
};

export default TimeCard;
