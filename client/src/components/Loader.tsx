import styles from "../styles/Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.wrap}>
      <span className={styles.loader}></span>
    </div>
  );
};

export default Loader;
