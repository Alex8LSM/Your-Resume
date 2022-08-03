import styles from './Contacts.module.css';
import common from '../Common.module.css';
const Contacts = ({ contacts }) => {
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
          <li key={key}>
            <a href={`mailto:${contact.link}`} className={styles.contactsLink}>
              {common}
              <span className={styles.contactText}>{contact.link}</span>
            </a>
          </li>
        );
      case 'phone':
        const phone = contact.link;
        const shortPhone = phone.replace(/ |-|\(|\)/g, '');
        return (
          <li key={key}>
            <a href={`tel:${shortPhone}`} className={styles.contactsLink}>
              {common}
              <span className={styles.contactText}>{contact.link}</span>
            </a>
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
          </li>
        );
    }
  });
  return (
    <div className={common.container}>
      <h3 className={common.title}>Contacts</h3>
      <ul className={styles.list}>{contactList}</ul>
    </div>
  );
};
export default Contacts;
