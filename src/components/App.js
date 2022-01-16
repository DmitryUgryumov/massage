import "../stylesheets/index.css";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import NavHeader from "./Nav/NavHeader";
import About from "./Pages/About";
import Gallery from "./Pages/Gallery";
import Contacts from "./Pages/Contacts";
import Context from "./Context/Context";
import { useEffect, useRef, useState } from "react";
import ModalWindowImg from "./ModalWindow/ModalWindowImg";
import Footer from "./Footer/Footer";
import ScrollUpButton from "./UI/ScrollUpButton";

function App() {
  const [activeService, setActiveService] = useState(null);

  return (
    <>
      <NavHeader />

      <Switch>
        <Context.Provider
          value={{
            activeService,
            setActiveService,
            // showModal,
            // setShowModal,
            // modalImages,
            // setModalImages,
            // showModalHandler,
          }}
        >
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/services">
            <Services />
          </Route>

          <Route path="/gallery">
            <Gallery />
          </Route>

          <Route path="/contacts">
            <Contacts />
          </Route>
        </Context.Provider>
      </Switch>

      <ScrollUpButton />

      <Footer />
    </>
  );
}

export default App;
