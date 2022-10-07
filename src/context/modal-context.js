import { createContext, useState } from "react";

const ModalContext = createContext({
    modalOn: () => {},
    modalOff: () => {},
    modalIsOn: null,
    backDrop: null
});


export const ModalContextProvider = (props) => {

    const [backDrop, setBackDrop] = useState(false);
    const [modal, setModal] = useState(false);

    const modalOnHandler = () => {
        setBackDrop(true);
        setModal(true);
    };

    const modalOffHandler = () => {
        setModal(false);
        setBackDrop(false);
    };

    const context = {
        backDrop: backDrop,
        modalIsOn: modal,
        modalOn: modalOnHandler,
        modalOff: modalOffHandler,
    };

    return (
    <ModalContext.Provider value={context}>
        {props.children}
    </ModalContext.Provider>
    );
}

export default ModalContext;