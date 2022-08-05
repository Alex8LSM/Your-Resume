import styles from './Buttons.module.css';
const EditBtn = ({ action }) => (
  <button onClick={action} className={styles.edit}>
    E
  </button>
);
const DeleteBtn = ({ action }) => (
  <button onClick={action} className={styles.delete}>
    -
  </button>
);
const AddBtn = ({ action }) => (
  <button onClick={action} className={styles.add}>
    +
  </button>
);

const Buttons = { EditBtn, DeleteBtn, AddBtn };

export default Buttons;
