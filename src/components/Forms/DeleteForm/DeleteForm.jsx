// import { useState } from 'react';
// import 'react-toastify/dist/ReactToastify.css';
import styles from './DeleteForm.module.css';
import {
  UserDataContext,
  useUserDataContext,
  UserActionContext,
  useUserActionContext,
} from 'context';
export default function DeleteForm({ dataId }) {
  const actions = useUserActionContext(UserActionContext); //context actions
  const userData = useUserDataContext(UserDataContext); //context userData
  const contactType = userData?.contacts[dataId]?.type;
  const { closeModal } = actions;
  const handleSubmit = async event => {
    event.preventDefault();
    const contactList = userData.contacts.filter(
      (contact, id) => id !== dataId
    );
    console.log(`${contactType} is deleted`);
    userData.contacts = contactList;
    closeModal();
  };

  return (
    <form className={styles.form}>
      <label className={styles.label}>Delete your {contactType}?</label>
      <div className={styles.box}>
        <button className={styles.button} type="submit" onClick={handleSubmit}>
          Yes
        </button>
        <button className={styles.button} type="button" onClick={closeModal}>
          No
        </button>
      </div>
    </form>
  );
}
