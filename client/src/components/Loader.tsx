import styles from '../styles/Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.loader}>
      <span className={styles.loader_text}>loading</span>
      <span className={styles.load}></span>
    </div>
  );
};

export default Loader;
