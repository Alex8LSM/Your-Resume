import styles from './Forms.module.css';

const Forms = () => {
  const handleSubmit = () => {};
  return (
    <div className={styles.container}>
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
            id={nameId}
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
            id={numberId}
          />
        </label>

        <button className={s.button} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};

export default Forms;
