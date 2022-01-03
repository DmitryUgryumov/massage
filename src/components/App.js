import "../stylesheets/index.css";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import NavHeader from "./Nav/NavHeader";
import About from "./Pages/About";
import Gallery from "./Pages/Gallery";
import Contacts from "./Pages/Contacts";
import Recording from "./Pages/Recording";
import MapScripts from "./Scripts/MapScripts";
import Context from "./Context/Context";
import { useState } from "react";

function App() {
  const [activeService, setActiveService] = useState(null);

  return (
    <>
      <NavHeader />

      <Switch>
        <Context.Provider value={{ activeService, setActiveService }}>
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

          <Route path="/recording">
            <Recording />
          </Route>
        </Context.Provider>
      </Switch>
    </>
  );
}

export default App;
