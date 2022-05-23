import React, { useState } from "react";
import styles from "./TimeCard.module.css";
import Card from "./UI/Card";
import ellipsis from "../assets/icon-ellipsis.svg";

const TimeCard = (props) => {
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

          {/* <div className={styles.background} style={{backgroundColor: bgColor}}></div> */}
          <div className={styles.content}>
            <div className={styles.left}>
              <p>{props.title}</p>
              <p>32hrs</p>
            </div>
            <div className={styles.right}>
              <img src={ellipsis} alt="more" />
              <p>Last Week - 36hrs</p>
            </div>
          </div>
        </article>
      </Card>
    </li>
  );
};

export default TimeCard;
