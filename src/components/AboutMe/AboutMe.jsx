import styles from './AboutMe.module.css';

const AboutMe = ({data}) => {
  return (
                <section className={styles.container}>
                    <h2 className={styles.profession}> {data.profession}</h2>
                    <h1 className={styles.myName}> {data.name}</h1>
                    <p className={styles.description}> {data.description} </p>    
                </section>
  );
};

export default AboutMe;