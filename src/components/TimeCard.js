import styles from "./TimeCard.module.css";
import Card from "./UI/Card";

const TimeCard = () => {
  return (
    <li>
      <Card className={styles["time-card"]}/>
    </li>
  );
};

export default TimeCard;
