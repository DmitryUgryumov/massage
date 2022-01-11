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
import ModalWindow from "./ModalWindow/ModalWindow";
import Footer from "./Footer/Footer";

function App() {
  const [activeService, setActiveService] = useState(null);
  const [showUpButton, setShowUpButton] = useState(false);

  ///// УБРАТЬ
  // const [showModal, setShowModal] = useState(false);
  // const [modalImages, setModalImages] = useState({
  //   images: [],
  //   index: null,
  // });
  //
  // const showModalHandler = (img) => {
  //   setModalImages(img);
  //   setShowModal(true);
  // };
  //////

  const buttonUp = useRef(null);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const pageHeight = window.innerHeight;
      const scrollHeight = document.documentElement.scrollTop;

      if (scrollHeight / pageHeight < 1) {
        buttonUp.current.className = "up-buttonUp up-button_hidden";

        // if (showUpButton) {
        //   buttonUp.current.className = "up-buttonUp up-button_hidden";
        // setShowUpButton(false);
        // buttonUp.current.style.opacity = 0;
        // }
      }

      if (scrollHeight / pageHeight > 1) {
        buttonUp.current.className = "up-buttonUp up-button_show";
        // if (!showUpButton) {
        //   buttonUp.current.className = "up-buttonUp up-button_show";
        // setShowUpButton(true);
        // buttonUp.current.style.opacity = 1;
        // }
      }
    });
  }, []);

  function scrollTo(to, duration = 700) {
    const element = document.scrollingElement || document.documentElement,
      start = element.scrollTop,
      change = to - start,
      startDate = +new Date(),
      // t = current time
      // b = start value
      // c = change in value
      // d = duration
      easeInOutQuad = function (t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      },
      animateScroll = function () {
        const currentDate = +new Date();
        const currentTime = currentDate - startDate;
        element.scrollTop = parseInt(
          easeInOutQuad(currentTime, start, change, duration)
        );
        if (currentTime < duration) {
          requestAnimationFrame(animateScroll);
        } else {
          element.scrollTop = to;
        }
      };
    animateScroll();
  }

  const pageUpHandler = () => {
    const interval = setInterval(() => {
      document.documentElement.scrollTop =
        document.documentElement.scrollTop - 15;
      if (document.documentElement.scrollTop <= 0) {
        clearInterval(interval);
      }
    }, 0);

    // setShowUpButton(false);
  };

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

      <Footer />
      <button
        className="up-button up-button_hidden"
        onClick={() => scrollTo(0, 400)}
        // onClick={pageUpHandler}
        ref={buttonUp}
      >
        Вверх
      </button>

      {/*{showUpButton ? (*/}
      {/*  <>*/}
      {/*    <button*/}
      {/*      className="up-button"*/}
      {/*      onClick={() => scrollTo(0, 400)}*/}
      {/*      ref={buttonUp}*/}
      {/*    >*/}
      {/*      Вверх*/}
      {/*    </button>*/}
      {/*  </>*/}
      {/*) : null}*/}

      {/*{showModal ? (*/}
      {/*  <ModalWindow modalImages={modalImages} setShowModal={setShowModal} />*/}
      {/*) : null}*/}
    </>
  );
}

export default App;
