import styles from "./Card.module.css";

const Card = (props) => {
    return (<div className = {`${styles.card} ${props.className ? props.className : ''}`}>{props.children}</div>); // children is inbuilt keyword
}

export default Card;