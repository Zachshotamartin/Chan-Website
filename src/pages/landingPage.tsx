import styles from "./landingPage.module.css";
import Cover from "../components/cover/cover";
import Navigation from "../components/navigation/navigation";

const LandingPage = () => {
  return (
    <div className={styles.landingPage}>
      <Cover />
      <Navigation />
    </div>
  );
};

export default LandingPage;
