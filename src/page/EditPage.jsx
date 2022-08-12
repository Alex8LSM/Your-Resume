import { useState, useEffect } from 'react';
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
  FormSwitcher,
  Buttons,
} from '../components';
import Modal from '../components/Modal/Modal';
import styles from './Page.module.css';
export default function EditPage({ user }) {
  const [showModal, setShowModal] = useState(false);
  const [action, setAction] = useState();
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const onAdd = () => {
    console.log('Add');
    setAction('Add');
    toggleModal();
  };
  const onDelete = id => {
    console.log('Delete');
    setAction('Delete');
    toggleModal();
  };
  const onEdit = id => {
    console.log('Edit', id);
    setAction('Edit');
    toggleModal();
    // contacts[id].link = 'newEmail@Gmail.Com';
    // setData([...contacts]);
    // console.log('data', data);
  };
  return (
    <Section className={styles.mainContainer}>
      <Section className={styles.container}>
        {/* Modal forms */}
        {showModal && (
          <Modal onToggleModal={toggleModal}>
            <FormSwitcher
              action={action}
              toggleModal={toggleModal}
              dataId="1"
            />
          </Modal>
        )}
        <Sidebar photo={user.photo}>
          {/* <UserContext.Consumer> */}
          {/* {value => */}
          <Contacts
            contacts={user.contacts}
            buttons={Buttons}
            actions={{ onAdd, onDelete, onEdit }}
          />
          {/* </UserContext.Consumer> */}
          <TechSkills skills={user.techSkills} buttons={Buttons} />
          <SoftSkills skills={user.softSkills} buttons={Buttons} />
          <Languages languages={user.languages} buttons={Buttons} />
        </Sidebar>
        {/* <!--Main_content_section--> */}
        <Section className={styles.mainContent}>
          <AboutMe data={user.aboutMe} />
          <Projects projects={user.projects} />
          <WorkExperience companies={user.workExperience} />
          <Education universities={user.education} />
        </Section>
        {/* <Modal/> */}
      </Section>
    </Section>
  );
}
