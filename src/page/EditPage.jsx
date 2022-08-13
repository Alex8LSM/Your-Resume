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
  FormSwitcher,
  Buttons,
} from '../components';
import Modal from '../components/Modal/Modal';
import styles from './Page.module.css';
import {
  useUserDataContext,
  UserDataContext,
  UserActionContext,
} from '../context';
export default function EditPage() {
  const userData = useUserDataContext(UserDataContext);
  const [showModal, setShowModal] = useState(false);
  const [action, setAction] = useState();
  const [dataId, setDataId] = useState();
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const closeModal = () => {
    console.log('Modal is closing');
    setShowModal(false);
  };
  const onAdd = () => {
    console.log('Add');
    setAction('Add');
    toggleModal();
  };
  const onDelete = id => {
    console.log('Delete', id);
    setAction('Delete');
    setDataId(id);
    toggleModal();
  };
  const onEdit = id => {
    console.log('Edit', id);
    setAction('Edit');
    setDataId(id);
    toggleModal();
  };
  const userAction = {
    onAdd,
    onEdit,
    onDelete,
    closeModal,
  };
  return (
    <UserActionContext.Provider value={userAction}>
      <Section className={styles.mainContainer}>
        <Section className={styles.container}>
          {/* Modal forms */}
          {showModal && (
            <Modal onToggleModal={toggleModal}>
              <FormSwitcher formAction={action} dataId={dataId} />
            </Modal>
          )}
          <Sidebar photo={userData.photo}>
            {/* <UserContext.Consumer> */}
            {/* {value => */}
            <Contacts
              contacts={userData.contacts}
              buttons={Buttons}
              // actions={{ onAdd, onDelete, onEdit }}
            />
            {/* </UserContext.Consumer> */}
            <TechSkills skills={userData.techSkills} buttons={Buttons} />
            <SoftSkills skills={userData.softSkills} buttons={Buttons} />
            <Languages languages={userData.languages} buttons={Buttons} />
          </Sidebar>
          {/* <!--Main_content_section--> */}
          <Section className={styles.mainContent}>
            <AboutMe data={userData.aboutMe} />
            <Projects projects={userData.projects} />
            <WorkExperience companies={userData.workExperience} />
            <Education universities={userData.education} />
          </Section>
          {/* <Modal/> */}
        </Section>
      </Section>
    </UserActionContext.Provider>
  );
}
