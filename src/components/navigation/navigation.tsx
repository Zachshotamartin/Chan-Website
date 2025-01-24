import styles from "./navigation.module.css";

import { Link } from "react-router-dom";


const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <Link className={styles.link} to="/projects">
        Projects
      </Link>
      <Link className={styles.link} to="/aboutme">
        About Me
      </Link>
      <Link className={styles.link} to="/contact">
        Contact
      </Link>
    </div>
  );
};

export default Navigation;
