import { useState } from 'react';
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
  Buttons,
} from '../components';
import Modal from '../components/Modal/Modal';
import styles from './Page.module.css';
export default function EditPage({ user }) {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
    console.log('modaltogled');
  };
  const onAdd = () => {
    console.log('Add');
    toggleModal();
  };
  const onDelete = id => {
    console.log('Delete');
    toggleModal();
  };
  const onEdit = id => {
    console.log('Edit', id);
    toggleModal();
    // contacts[id].link = 'newEmail@Gmail.Com';
    // setData([...contacts]);
    // console.log('data', data);
  };
  return (
    // <!--Main_conteiner-->
    <Section className={styles.mainContainer}>
      {/* <!--Rectangle_1--> */}
      <Section className={styles.container}>
        {/* <!--sidebar_section--> */}
        {/* Modal forms */}
        {/* {showModal && ( */}
        <Modal onToggleModal={toggleModal}>
          {/* <ContactForm action="Add"/> */}
          {/* <ContactForm action="Edit"/> */}
          {/* <DeleteForm closeModal={toggleModal} dataId="1" /> */}
        </Modal>
        {/* )} */}
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
