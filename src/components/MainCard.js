import styles from "./MainCard.module.css";
import Card from "./UI/Card";
import jeremyImage from "../assets/image-jeremy.png";

const MainCard = () => {
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
        <p>Daily</p>
        <p className={styles.active}>Weekly</p>
        <p>Monthly</p>
      </sub>
    </Card>
  );
};

export default MainCard;
