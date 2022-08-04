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
  Buttons
} from '../components';
import styles from './Page.module.css';

export default function EditPage({user}) {
  return (
    // <!--Main_conteiner-->
    <Section className={styles.mainContainer}>
    {/* <!--Rectangle_1--> */}
      <Section className={styles.container}>
        {/* <!--sidebar_section--> */}
        <Sidebar photo={user.photo}>
          <Contacts 
            contacts={user.contacts}
            buttons={Buttons} 
          />
          <TechSkills 
            skills={user.techSkills} 
            buttons={Buttons}
          />
          <SoftSkills 
            skills={user.softSkills} 
            buttons={Buttons}
          />
          <Languages 
            languages={user.languages} 
            buttons={Buttons}
          />
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
