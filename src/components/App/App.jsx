import styles from './App.module.css';
import Section from '../Section/Section';
import AboutMe from '../AboutMe/AboutMe';
import Projects from '../Projects/Projects';
import WorkExperience from '../WorkExperience/WorkExperience';
import Education from '../Education/Education';
import Sidebar from '../Sidebar/Sidebar';
import Contacts from '../Contacts/Contacts';
import TechSkills from '../TechSkills/TechSkills';
import SoftSkills from '../SoftSkills/SoftSkills';
import user from '../../Data/user.json';
export const App = () => {
  return (
    // <!--Main_conteiner-->
    <Section className={styles.mainContainer}>
      {/* <!--Rectangle_1--> */}
      <Section className={styles.container}>
        {/* <!--Main_content_section--> */}
        <Section className={styles.mainContent}>
          <AboutMe data={user.aboutMe} />
          <Projects projects={user.projects} />
          <WorkExperience companies={user.workExperience} />
          <Education universities={user.education} />
        </Section>
        {/* <!--sidebar_section--> */}
        <Sidebar photo={user.photo}>
          <Contacts contacts={user.contacts} />
          <TechSkills skills={user.techSkills} />
          <SoftSkills skills={user.softSkills} />
        </Sidebar>
      </Section>
    </Section>
  );
};
