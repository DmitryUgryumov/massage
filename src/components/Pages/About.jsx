import React, { useContext, useState } from "react";

import certificate1 from "../../img/about/certificate-1.jpg";
import certificate2 from "../../img/about/certificate-2.jpg";

import Context from "../Context/Context";
import AboutDescription from "./About/AboutDescription";
import Slider from "../Slider/Slider";
import ModalWindow from "../ModalWindow/ModalWindow";

const images = [
  { id: 1, img: certificate1 },
  { id: 2, img: certificate2 },
];

const About = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalImages, setModalImages] = useState({
    images: [],
    index: null,
  });

  const showModalHandler = (img) => {
    setModalImages(img);
    setShowModal(true);
  };

  return (
    <main>
      <section className="about">
        <AboutDescription showModalHandler={showModalHandler} />
        <Slider images={images} showModalHandler={showModalHandler} />

        {showModal ? (
          <ModalWindow modalImages={modalImages} setShowModal={setShowModal} />
        ) : null}
      </section>
    </main>
  );
};

export default About;
