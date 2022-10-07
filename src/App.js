import Footer from "./components/Footer";
import Header from "./components/Header";
import Sections from "./components/Sections";

import { Helmet } from 'react-helmet';
import Modal from "./components/Modal";

import { useContext } from 'react';
import ModalContext from "./context/modal-context";
import Backdrop from "./components/Backdrop";


function App() {

  const modalCtx = useContext(ModalContext);
  console.log(modalCtx.modalIsOn)

  return (
    <div>
      <Helmet>
        <title>Future One</title>
        <meta name="description" content="Subscribe to the best newsletter on the internet" />
        <meta name="keywords" content="Newspaper, Networking, Software" />
      </Helmet>
      <Header />
      {modalCtx.modalIsOn && <Modal />}
      {modalCtx.modalIsOn && <Backdrop />}
      <Sections />
      <Footer />
    </div>
  );
}

export default App;