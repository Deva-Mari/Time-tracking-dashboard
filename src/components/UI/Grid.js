import styles from "./Grid.module.css";

const Grid = (props) =>{
    return (<div className = {`${styles.grid} ${props.className ? props.className : ''}`}>{props.children}</div>);
}

export default Grid;