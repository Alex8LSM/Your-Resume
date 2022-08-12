import { useState } from 'react';
// import 'react-toastify/dist/ReactToastify.css';
import styles from './ContactForm.module.css';

function ContactForm({action}) {
  const [type, setType] = useState('phone');
  const [value, setValue] = useState('');
  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'type':
        setType(value);
        break;
      case 'value':
        setValue(value);
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

    // if (checkContact('name', name)) toast.error(`${name} is already added.`);
    // else if (checkContact('number', number))
    //   toast.error(`${number} is already added.`);
    // else {
    //   dispatch(
    //     addContacts({
    //       name: name,
    //       number: number,
    //     })
    //   );
    //   setName('');
    //   setNumber('');
    // }
  };

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
        <label className={styles.label}>{action} your contact</label>
        <div className={styles.box}>
          <label className={styles.label}>
            <span className={styles.labelTitle}>Contact type</span>
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
                defaultValue="phone"
              >
                <option value="phone">Phone</option>
                <option value="email">Email</option>
                <option value="github">GitHub</option>
                <option value="linkedin">LinkedIn</option>
                <option value="instagram">Instagram</option>
                <option value="twitter">Twitter</option>
                <option value="addr">Address</option>
              </select>
            </div>
          </label>
          <label className={styles.label}>
            <span className={styles.labelTitle}>Input your {type}</span>
            <input
              type="text"
              name="value"
              // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              // title="number number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              className={styles.input}
              // value={value}
              onChange={handleChange}
              // id={numberId}
            />
          </label>
        </div>
        <button className={styles.button} type="submit">
          {action} contact
        </button>
      </form>
    </>
  );
}

export default ContactForm;
