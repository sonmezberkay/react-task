import Sections from "../components/Sections";
import Modal from "./components/Modal";

import { Fragment, useContext } from 'react';
import ModalContext from "./context/modal-context";
import Backdrop from "./components/Backdrop";



const Homepage = () => {

    const modalCtx = useContext(ModalContext);


    return (
        <Fragment>
            {modalCtx.modalIsOn && <Modal />}
            {modalCtx.modalIsOn && <Backdrop />}
            <Sections />
        </Fragment>
    );
};

export default Homepage;