import { useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import styles from './ContactForm.module.css';
import {
  UserDataContext,
  useUserDataContext,
  UserActionContext,
  useUserActionContext,
} from 'context';
function ContactForm({ formAction, dataId }) {
  const actions = useUserActionContext(UserActionContext); //context actions
  const user = useUserDataContext(UserDataContext); //context userData
  let { contacts } = user;
  const { closeModal } = actions;
  let contactType = 'phone';
  let contacLink = '';
  let cityLink = '';
  let countryLink = '';
  if (formAction === 'Edit') {
    contactType = contacts[dataId].type;
    contacLink = contacts[dataId].link;
    if (contactType === 'address') {
      const address = contacLink.split(',');
      cityLink = address[0];
      countryLink = address[1];
    }
  }
  const [type, setType] = useState(contactType);
  const [link, setLink] = useState(contacLink);
  const [city, setCity] = useState(cityLink);
  const [country, setCountry] = useState(countryLink);
  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'type':
        setType(value);
        setLink('');
        setCity('');
        setCountry('');
        break;
      case 'value':
        setLink(value);
        break;
      case 'city':
        setCity(value);
        setLink(`${value},${country}`);
        break;
      case 'country':
        setCountry(value);
        setLink(`${city},${value}`);
        break;
      default:
        return;
    }
  };
  // const checkContact = (field, value) =>
  //   contacts.find(
  //     contact => contact[field].toLowerCase() === value.toLowerCase()
  //   );

  const handleSubmit = async event => {
    event.preventDefault();
    // if (checkContact('type', type)) toast.error(`${type} is already added.`);
    // else
    // if (checkContact('link', link))
    //   toast.error(`${type} ${link} is already exist.`);
    // else {
    switch (formAction) {
      case 'Edit':
        console.log('Click Edit');
        const contactList = contacts.map((contact, id) => {
          if (id === dataId) {
            contact.type = type;
            contact.link = link;
          }
          return contact;
        });
        user.contacts = contactList;
        console.log('user', user);
        break;
      case 'Add':
        console.log('Click Add');
        user.contacts.push({ type, link });
        console.log('user', user);
        break;
      default:
        return;
    }
    closeModal();
  };
  // };
  return (
    <>
      {/* <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      /> */}
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>{formAction} your contact</label>
        <div className={styles.box}>
          <label className={styles.label}>
            <span className={styles.labelTitle}>Type</span>
            <div className={styles.box}>
              <div className={styles.svgContainer}>
                <svg className={styles.svgIcon} width="20px" height="20px">
                  <use href={`./icons.svg#${type}`}></use>
                </svg>
              </div>
              <select
                id="type"
                name="type"
                onChange={handleChange}
                value={type}
              >
                <option value="phone">Phone</option>
                <option value="email">Email</option>
                <option value="github">GitHub</option>
                <option value="linkedin">LinkedIn</option>
                <option value="facebook">Facebook</option>
                <option value="instagram">Instagram</option>
                <option value="twitter">Twitter</option>
                <option value="address">Address</option>
              </select>
            </div>
          </label>
          <label className={styles.label}>
            {type === 'address' ? (
              <>
                <div className={styles.addr}>
                  <div>
                    <span className={styles.labelTitle}>City</span>
                    <input
                      type="text"
                      name="city"
                      value={city}
                      required
                      className={styles.input}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <span className={styles.labelTitle}>Country</span>
                    <input
                      type="text"
                      name="country"
                      value={country}
                      required
                      className={styles.input}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                <span className={styles.labelTitle}>Input your {type}</span>
                <input
                  type="text"
                  name="value"
                  value={link}
                  required
                  className={styles.input}
                  onChange={handleChange}
                />
              </>
            )}
          </label>
        </div>
        <div className={styles.box}>
          <button className={styles.button} type="submit">
            {formAction} contact
          </button>
          <button className={styles.button} type="button" onClick={closeModal}>
            Cancel
          </button>
        </div>
      </form>
    </>
  );
}

export default ContactForm;
