import styles from './Sidebar.module.css';

const Sidebar = ({ children,photo }) => {
const {image,alt} = photo;

console.log(image,alt)
console.log(photo)
  return (
    <section className={styles.container}>
      <img src={image} alt={alt}/>
      {children}
    </section>
  );
};

export default Sidebar;