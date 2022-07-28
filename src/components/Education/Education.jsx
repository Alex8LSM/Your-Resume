import styles from './Education.module.css';
const Education = ({universities}) => {
  const universityList=universities.map((university,key)=>(
  <div key={key}>
      <h4 className={styles.university}>{university.university}</h4>
      <h4 className={styles.specialty}>{university.specialty}</h4>
      <p className={styles.period}>{university.period}
      <span className={styles.divider}>|</span>{university.country}</p>
  </div>))
  return (
    <section className={styles.container}>
      <h3 className={styles.title}>Education</h3>
      {universityList}
    </section>
  );
};
export default Education;