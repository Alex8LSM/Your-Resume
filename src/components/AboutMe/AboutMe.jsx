import styles from './AboutMe.module.css';
import common from '../Common.module.css';
const AboutMe = ({ data }) => {
  return (
    <section className={common.container}>
      <h1 className={styles.myName}> {data.name}</h1>
      <h2 className={styles.profession}>
        <span className={styles.level}>{data.level} </span>
        {data.profession}
      </h2>
      <h3 className={common.mainTitle}>SUMMARY</h3>
      <p className={styles.description}> {data.description} </p>
    </section>
  );
};

export default AboutMe;
