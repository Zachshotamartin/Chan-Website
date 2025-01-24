import styles from "./cover.module.css";
import boxImage from "../../assets/images/box.png";
import buildingImage from "../../assets/images/building.png";
import dinoImage from "../../assets/images/dino.png";
import iPhoneImage from "../../assets/images/iphone.png";
import soulImage from "../../assets/images/soul.png";
const Cover = () => {
  return (
    <div className={styles.cover}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>ChanMarie</h1>
      </div>
      <div className={styles.descriptionContainer}>
        <p className={styles.phrase}>
          Bringing people on the journey to Create purpose through joy.
        </p>
        <p className={styles.about}>
          I’m a Product Engineer fluent in the languages of physical, digital,
          and strategic design. No matter my role, I leave a design imprint.
        </p>
      </div>
      <img className={styles.box} src={boxImage} alt="box" />
      <img className={styles.building} src={buildingImage} alt="building" />
      <img className={styles.dino} src={dinoImage} alt="dino" />
      <img className={styles.iPhone} src={iPhoneImage} alt="iPhone" />
      <img className={styles.soul} src={soulImage} alt="soul" />
    </div>
  );
};

export default Cover;
