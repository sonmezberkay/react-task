import ContactForm from './ContactForm';
import styles from './Modal.module.css';



const Modal = () => {


    return (
        <div className={styles['form-div']}>
            <ContactForm />
        </div>
    );
};


export default Modal;