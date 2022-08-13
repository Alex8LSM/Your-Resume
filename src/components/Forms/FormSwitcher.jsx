import ContactForm from './ContactForm/ContactForm';
import DeleteForm from './DeleteForm/DeleteForm';

export default function formSwitcher({ formAction, dataId }) {
  switch (formAction) {
    case 'Add':
      return <ContactForm formAction="Add" />;
    case 'Edit':
      return <ContactForm formAction="Edit" dataId={dataId} />;
    case 'Delete':
      return <DeleteForm dataId={dataId} />;
    default:
      return;
  }
}
