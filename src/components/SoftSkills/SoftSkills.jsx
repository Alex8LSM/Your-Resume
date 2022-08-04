import styles from '../Common.module.css';
// import {user} from '../../components'
const SoftSkills = ({ skills,buttons }) => {
  const editButtons=buttons?.editButtons;
  const addButton=buttons?.addButton;
  const skillsList = skills.map((skill, key) => (
    <li className={styles.item} key={key}>
      <div className={styles.box}>
        <span className={styles.text}>{skill}</span>
        {editButtons}
      </div>
    </li>
  ));
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        <div className={styles.box}>
          <span>
            Soft Skills
          </span> 
          {addButton}
        </div>
      </h3>
      <ul className={styles.list}>{skillsList}</ul>
    </div>
  );
};

export default SoftSkills;
