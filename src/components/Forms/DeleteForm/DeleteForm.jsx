import { useState } from 'react';
// import 'react-toastify/dist/ReactToastify.css';
import styles from './DeleteForm.module.css';

export default function DeleteForm({closeModal, dataId }) {
  const [type, setType] = useState('phone');
  const [value, setValue] = useState('');
  const handleSubmit = async event => {
    event.preventDefault();
    console.log("data is deleted")
    closeModal()
  };

  return (
    <form className={styles.form}>
      <label className={styles.label}>Delete your contact {dataId}?</label>
      <div className={styles.box}>
        <button className={styles.button} type="submit" onClick={handleSubmit}>
          Yes
        </button>
        <button className={styles.button} 
        // onClick={closeModal}
        >No</button>
      </div>
    </form>
  );
}
