import data from "../data/data.json";
import TimeCard from "./TimeCard";
import styles from "./TimeCards.module.css";

const TimeCards = (props) =>{
    return(
        <ul className={styles['time-cards']}>
        {data.map((item) => (
          <TimeCard
            key={Math.random().toString()}
            title={item.title}
            timeframes={item.timeframes}
            selectedTimeframe={props.selectedTimeframe}
          />
        ))}
      </ul>
    )
}
export default TimeCards;