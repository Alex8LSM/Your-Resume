import styles from './Education.module.css';
import common from '../Common.module.css';
const Education = ({ universities }) => {
  const universityList = universities.map((university, key) => (
    <div key={key}>
      <h4 className={styles.university}>{university.university}</h4>
      <h4 className={styles.specialty}>{university.specialty}</h4>
      <p className={styles.period}>
        {university.period}
        <span className={common.divider}>|</span>
        {university.country}
      </p>
    </div>
  ));
  return (
    <section className={common.container}>
      <h3 className={common.mainTitle}>Education</h3>
      {universityList}
    </section>
  );
};
export default Education;
