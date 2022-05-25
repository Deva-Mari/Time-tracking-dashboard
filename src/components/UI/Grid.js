import styles from "./Grid.module.css";

const Grid = (props) =>{
    return (<main role="main" className = {`${styles.grid} ${props.className ? props.className : ''}`}>{props.children}</main>);
}

export default Grid;