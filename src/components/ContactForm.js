import formStyles from './ContactForm.module.css';
import { useContext } from 'react';
import ModalContext from '../context/modal-context';


const ContactForm = () => {

    const modalCtx = useContext(ModalContext);

    const submitHandler = (e) => {
        e.preventDefault();
        modalCtx.modalOff();
    };



    return (
        <form className={formStyles.form}>
            <div className={formStyles.email}>
                <input placeholder='E-Mail' id='email' name='email' />
            </div>
            <div className={formStyles.message}>
                <textarea placeholder='Enter your message...' id='message' name='message' />
            </div>
            <button onClick={submitHandler}>Send</button>
        </form>
    );

};

export default ContactForm;