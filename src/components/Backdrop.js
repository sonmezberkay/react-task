import classes from './Backdrop.module.css';
import { useContext } from 'react';
import ModalContext from '../context/modal-context';


const Backdrop = () => {

    const modalCtx = useContext(ModalContext);

    return (
        <div className={classes.backdrop} onClick={modalCtx.modalOff}>
        </div>
    );
};

export default Backdrop;