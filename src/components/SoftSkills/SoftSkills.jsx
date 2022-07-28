import styles from './SoftSkills.module.css';

const SoftSkills = ({skills}) => {
  const skillsList=skills.map((skill,key)=>(
    <li className={styles.item} key={key}>
      <span className={styles.text}>{skill}</span>
    </li>
  ))
  return (
  <div className={styles.container}>

      <h3 className={styles.title}>Soft Skills</h3>
      <ul className={styles.list}>
          {skillsList}
      </ul>
  </div>
  );
};

export default SoftSkills;