import ContactForm from "./ContactForm/ContactForm";
import DeleteForm from "./DeleteForm/DeleteForm";

export default function formSwitcher ({action,toggleModal,dataId})
{
    switch (action) {
        case 'Add':
           return <ContactForm action="Add"/>
        case 'Edit':
            return <ContactForm action="Edit"/>
        case 'Delete':
            return <DeleteForm closeModal={toggleModal} dataId={dataId} />
        default:
          return;
      }     
}