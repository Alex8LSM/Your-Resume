import styles from './Projects.module.css';

const Projects = ({projects}) => {
const progectList=projects.map((project,key)=>(
    <li className={styles.projectsItem} key={key}>
        <a href={project.link} className={styles.projectsLink}>{project.link}</a>
        <span className={styles.projectsText}>...................................
            <span className={styles.projectsBracket}>[</span> 
             {project.tehnology} 
            <span className={styles.projectsBracket}>]</span>
        </span>
    </li>
    ))
  return (
    <section className={styles.container}>
      <h3 className={styles.mainTitle}>Projects</h3>
  
      <ol className={styles.projectsList}>
      {progectList}
      </ol>


    </section>
  )
};

export default Projects;