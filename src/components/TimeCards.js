import data from "../data/data.json";
import TimeCard from "./TimeCard";
import styles from "./TimeCards.module.css";

const TimeCards = () =>{
    return(
        <ul className={styles['time-cards']}>
        {data.map((item) => (
          <TimeCard
            key={Math.random().toString()}
            title={item.title}
            timeframes={item.timeframes}
          />
        ))}
      </ul>
    )
}
export default TimeCards;