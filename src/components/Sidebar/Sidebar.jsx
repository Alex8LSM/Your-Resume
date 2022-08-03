import styles from './Sidebar.module.css';

const Sidebar = ({ children, photo }) => {
  const { image, alt } = photo;
  return (
    <section className={styles.container}>
      <div className={styles.photoContainer}>
        <img src={image} alt={alt} className={styles.photo} />
      </div>
      {children}
    </section>
  );
};

export default Sidebar;
