import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { nanoid } from 'nanoid';
// import { addContacts } from '../../redux/phonebook/phonebookOperations';
// import { getContacts } from '../../redux/phonebook/phonebookSelectors';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import s from './ContactForm.module.css';

function ContactForm() {
  // const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  // const contacts = useSelector(getContacts);
  // const nameId = nanoid();
  // const numberId = nanoid();

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
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
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label}>
          <span className={s.labelTitle}>Name</span>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            className={s.input}
            value={name}
            onChange={handleChange}
            // id={nameId}
          />
        </label>
        <label className={s.label}>
          <span className={s.labelTitle}>Number</span>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="number number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            className={s.input}
            value={number}
            onChange={handleChange}
            // id={numberId}
          />
        </label>

        <button className={s.button} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
}

export default ContactForm;
