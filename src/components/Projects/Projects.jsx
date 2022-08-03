import styles from './Projects.module.css';
import common from '../Common.module.css';
const Projects = ({ projects }) => {
  const progectList = projects.map((project, key) => (
    <li className={styles.item} key={key}>
      <div className={styles.itemContainer}>
        <div className={styles.linkBlock}>
          <a href={project.link} className={styles.link}>
            {project.title}
          </a>
          <div className={styles.spacer}>
            .................................................................................
          </div>
        </div>
        <div className={styles.tehnologyBlock}>
          <span className={styles.bracket}>[ </span>
          <span className={styles.tehnology}>{project.tehnology}</span>
          <span className={styles.bracket}> ]</span>
        </div>
      </div>
      <div className={styles.description}>{project.description}</div>
    </li>
  ));
  return (
    <section className={common.container}>
      <h3 className={common.mainTitle}>Projects</h3>

      <ul className={styles.projectsList}>{progectList}</ul>
    </section>
  );
};

export default Projects;
