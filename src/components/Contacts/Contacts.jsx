import styles from './Contacts.module.css';

const Contacts = ({contacts}) => {
    const {email,phone}=contacts;
    const shortPhone=phone.replace(/ |-|\(|\)/g, '');
  return (
                <div className={styles.contacts}>
                    <h3 className={styles.title}>Contacts</h3>
                    <div>
                        <span className={styles.contactsType}>C:</span>
                        <a href={`tel:${shortPhone}`}
                           className={styles.contactsLink}>
                           {phone}
                        </a>
                    </div>
                    <div>
                        <span className={styles.contactsType}>E:</span>
                        <a href={`mailto:${email}`}
                           className={styles.contactsLink}>
                           {email}
                        </a>
                    </div>          
                </div>
  );
};

export default Contacts;