// TODO manish: Use purple color
// Reference: https://choc-ui.com/docs/elements/headers
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div>
      <nav className={styles.navbar}>
        <img
          src="https://techcrunch.com/wp-content/uploads/2021/11/facebook-meta-surveillance-2.jpg"
          alt=""
        />
        <div className={styles.logButtons}>
          <button className={styles.Login}>Login</button>
          <button className={styles.Signup}>Signup</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
