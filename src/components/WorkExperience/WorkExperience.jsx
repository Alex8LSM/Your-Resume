import styles from './WorkExperience.module.css';

const WorkExperience = ({companies}) => {
    const companyList=companies.map((company,key)=>(
        <div className={styles.companyBlock} key={key}>
        <h4 className={styles.position}>{company.position} 
            <span className={styles.company}> {company.company} </span>
        </h4>
        <p className={styles.period}>{company.period}
            <span className={styles.divider}>|</span> 
            {company.country} 
        </p>
        <ul className={styles.duties}>
            <span className={styles.duty}>
                {company.duties.map((duty,key)=>(
                    <li key={key}>{duty}</li>
                ))}
            </span>
        </ul>
    </div>
    ))

  return (
    <section className={styles.container}>
        <h3 className={styles.mainTitle}>Work Experience</h3>
        {companyList}
    </section>
  );
};
export default WorkExperience;