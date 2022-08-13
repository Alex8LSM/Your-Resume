import {
  Section,
  AboutMe,
  Projects,
  WorkExperience,
  Education,
  Sidebar,
  Contacts,
  TechSkills,
  SoftSkills,
  Languages,
} from 'components';
import styles from './Page.module.css';
import { useUserDataContext, UserDataContext } from 'context';
export default function HomePage() {
  const user = useUserDataContext(UserDataContext);
  return (
    // <!--Main_conteiner-->
    <Section className={styles.mainContainer}>
      {/* <!--Rectangle_1--> */}
      <Section className={styles.container}>
        {/* <!--sidebar_section--> */}
        <Sidebar photo={user.photo}>
          <Contacts contacts={user.contacts} />
          <TechSkills skills={user.techSkills} />
          <SoftSkills skills={user.softSkills} />
          <Languages languages={user.languages} />
        </Sidebar>
        {/* <!--Main_content_section--> */}
        <Section className={styles.mainContent}>
          <AboutMe data={user.aboutMe} />
          <Projects projects={user.projects} />
          <WorkExperience companies={user.workExperience} />
          <Education universities={user.education} />
        </Section>
      </Section>
    </Section>
  );
}
