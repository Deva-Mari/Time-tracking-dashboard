import styles from "./Attribution.module.css";

const Attribution = () => {
  return (
    <div className={styles.attribution}>
      Challenge by{" "}
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">
        Frontend Mentor
      </a>
      . Coded by <a href="https://devamari.com/" target="_blank" rel="noreferrer">Deva Mari</a>.
    </div>
  );
};

export default Attribution;
