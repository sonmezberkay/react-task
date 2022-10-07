import Footer from "./components/Footer";
import Header from "./components/Header";
import { Route, Redirect } from "react-router-dom";

import { Helmet } from 'react-helmet';

import Homepage from "./pages/Homepage";


function App() {


  return (
    <div>
      <Helmet>
        <title>Future One</title>
        <meta name="description" content="Subscribe to the best newsletter on the internet" />
        <meta name="keywords" content="Newspaper, Networking, Software" />
      </Helmet>
      <Header />
      <Route path='/'>
        <Homepage />
      </Route>
      <Redirect path='*'>
        <Homepage />
      </Redirect>
      <Footer />
    </div>
  );
}

export default App;