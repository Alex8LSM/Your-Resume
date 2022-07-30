import styles from './Languages.module.css';

const Languages = ({ languages }) => {
  const languageList = languages.map((lang, key) => (
    <li className={styles.item} key={key}>
      <span className={styles.text}>{lang.language} - </span>
      <span className={styles.text}>{lang.level}</span>
    </li>
  ));
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Languages</h3>
      <ul className={styles.list}>{languageList}</ul>
    </div>
  );
};

export default Languages;
