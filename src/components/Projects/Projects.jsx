import styles from './Projects.module.css';

const Projects = ({ projects }) => {
  const progectList = projects.map((project, key) => (
    <li className={styles.item} key={key}>
      <div className={styles.itemContainer}>
        <div className={styles.linkBlock}>
          <a href={project.link} className={styles.link}>
            {project.link}
          </a>
          <span className={styles.spacer}>
            .................................................................................
          </span>
        </div>
        <div className={styles.tehnologyBlock}>
          <span className={styles.bracket}>[ </span>
          <span className={styles.tehnology}>{project.tehnology}</span>
          <span className={styles.bracket}> ]</span>
        </div>
      </div>
    </li>
  ));
  return (
    <section className={styles.container}>
      <h3 className={styles.mainTitle}>Projects</h3>

      <ol className={styles.projectsList}>{progectList}</ol>
    </section>
  );
};

export default Projects;
