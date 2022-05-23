import "./Card.module.css";

const Card = (props) => {
    const classes = "styles.card " + props.className;
    return (<div className = {classes}>{props.children}</div>); // children is inbuilt keyword
}

export default Card;