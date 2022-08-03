import styles from './EditBtn.module.css';

 const EditBtn = ({type}) => {
  const onAdd = ()=>{
    console.log("Add")
  }
  const onDelete = ()=>{
    console.log("Delete")
  }
  const onEdit = ()=>{
    console.log("Edit")
  }
  const Btn = (type)=> {
    switch (type) {
      case "Add":
      return (<button onClick={onAdd} className={styles.add}> 
          +        
          </button>);
      case "Delete":
      return (<button onClick={onDelete} className={styles.delete}> 
          -        
          </button>);
      case "Edit":
      return (<button onClick={onEdit} className={styles.edit}> 
          E        
          </button>);
      default:
        break;
    }

  }
   return (
    <>
    {Btn(type)}
    </>
   );
 };

 export default EditBtn; 