import styles from './Contacts.module.css';
import common from '../Common.module.css';
// import {
//   useEffect,
//   useState,
// } from 'react';
import { UserActionContext, useUserActionContext } from 'context';
const Contacts = ({ contacts, buttons }) => {
  const actions = useUserActionContext(UserActionContext);
  // const { onAdd, onDelete, onEdit } = actions;
  // console.log('contacts', contacts);
  // const [data, setData] = useState();
  const EditBtn = buttons?.EditBtn;
  const DeleteBtn = buttons?.DeleteBtn;
  const AddBtn = buttons?.AddBtn;
  const onAdd = actions?.onAdd;
  const onDelete = actions?.onDelete;
  const onEdit = actions?.onEdit;
  // const onAdd = () => {
  //   console.log('Add');
  // };
  // const onDelete = id => {
  //   console.log('Delete');
  // };
  // const onEdit = id => {
  //   console.log('Edit', id);
  //   contacts[id].link = 'newEmail@Gmail.Com';
  //   setData([...contacts]);
  //   console.log('data', data);
  // };

  const editButtons = id => {
    if (EditBtn && DeleteBtn)
      return (
        <>
          <EditBtn action={() => onEdit(id)} />
          <DeleteBtn action={() => onDelete(id)} />
        </>
      );
  };
  const addButton = () => {
    if (AddBtn) return <AddBtn action={onAdd} />;
  };

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
      case 'address':
        const address = contact.link.split(',');
        const city = address[0];
        const country = address[1];
        return (
          <li className={styles.listBox} key={key}>
            <a
              href={`https://www.google.com/maps/search/${city}+${country}`}
              className={styles.contactsLink}
              target="_blank"
              rel="noreferrer"
            >
              {common}
              <span
                className={styles.contactText}
              >{`${city}, ${country}`}</span>
            </a>
            {editButtons(key)}
          </li>
        );
      default:
        return (
          <li className={styles.listBox} key={key}>
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
          {addButton()}
        </div>
      </h3>
      <ul className={styles.list}>{contactList}</ul>
    </div>
  );
};
export default Contacts;
