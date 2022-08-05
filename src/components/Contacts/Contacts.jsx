import styles from './Contacts.module.css';
import common from '../Common.module.css';
import {
  // useEffect,
  useState,
} from 'react';
// import { useUserContext } from '../../data';
const Contacts = ({ contacts, buttons }) => {
  // let user = { ...data };
  // user.contacts = null;
  // const data = useUserContext();
  // console.log('data', data);
  // let { contacts } = user;
  console.log('contacts', contacts);
  const [data, setData] = useState();
  // const newContacts
  // useEffect(() => {
  // setContacts(newContacts);
  // console.log('efect  used');
  // }, [data.contacts]);
  const EditBtn = buttons?.EditBtn;
  const DeleteBtn = buttons?.DeleteBtn;
  const AddBtn = buttons?.AddBtn;

  // let { contacts } = user;
  const onAdd = () => {
    console.log('Add');
  };
  const onDelete = id => {
    console.log('Delete');
  };
  const onEdit = id => {
    console.log('Edit', id);
    // const newContacts = [...contacts];
    contacts[id].link = 'newEmail@Gmail.Com';
    // user.flag = true;
    // setContacts(newContacts);
    // contacts = [...contacts];
    // console.log('user', user);
    setData([...contacts]);
    console.log('data', data);
  };

  const editButtons = id => (
    <>
      <EditBtn action={() => onEdit(id)} />
      <DeleteBtn action={() => onDelete(id)} />
    </>
  );
  const addButton = <AddBtn action={onAdd} />;

  const contactList = contacts.map((contact, key) => {
    const common = (
      <div className={styles.svgContainer}>
        <svg className={styles.svgIcon} width="20px" height="20px">
          <use href={`./icons.svg#${contact.type}`}></use>
        </svg>
      </div>
    );
    switch (contact.type) {
      case 'email':
        return (
          <li className={styles.listBox} key={key}>
            <a href={`mailto:${contact.link}`} className={styles.contactsLink}>
              {common}
              <span className={styles.contactText}>{contact.link}</span>
            </a>
            {editButtons(key)}
          </li>
        );
      case 'phone':
        const phone = contact.link;
        const shortPhone = phone.replace(/ |-|\(|\)/g, '');
        return (
          <li className={styles.listBox} key={key}>
            <a href={`tel:${shortPhone}`} className={styles.contactsLink}>
              {common}
              <span className={styles.contactText}>{contact.link}</span>
            </a>
            {editButtons(key)}
          </li>
        );
      case 'addr':
        return (
          <li key={key}>
            <a
              href={`https://www.google.com/maps/search/${contact.link.city},+${contact.link.country}`}
              className={styles.contactsLink}
              target="_blank"
              rel="noreferrer"
            >
              {common}
              <span className={styles.contactText}>
                {contact.link.city}, {contact.link.country}
              </span>
            </a>
            {editButtons(key)}
          </li>
        );
      default:
        return (
          <li key={key}>
            <a
              href={contact.link}
              className={styles.contactsLink}
              target="_blank"
              rel="noreferrer"
            >
              {common}
              <span className={styles.contactText}>{contact.type}</span>
            </a>
            {editButtons(key)}
          </li>
        );
    }
  });
  return (
    <div className={common.container}>
      <h3 className={common.title}>
        <div className={common.box}>
          <span>Contacts</span>
          {addButton}
        </div>
      </h3>
      <ul className={styles.list}>{contactList}</ul>
    </div>
  );
};
export default Contacts;
