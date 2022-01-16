import React, { useContext, useState } from "react";

import gallery1 from "../../img/gallery/gallery-1.jpg";
import gallery2 from "../../img/gallery/gallery-2.jpg";

import Context from "../Context/Context";
import ModalWindowImg from "../ModalWindow/ModalWindowImg";

const Gallery = () => {
  // const { setShowModal, setModalImages } = useContext(Context);
  const [showModal, setShowModal] = useState(false);
  const [modalImages, setModalImages] = useState({
    images: [],
    index: null,
  });

  const galleryImages = [];

  for (let i = 1; i < 11; i++) {
    if (i % 2 === 0) {
      galleryImages.push({ id: i, img: gallery1 });
    } else {
      galleryImages.push({ id: i, img: gallery2 });
    }
  }

  const showModalHandler = (img) => {
    setModalImages({
      images: galleryImages.map((img) => img.img),
      index: galleryImages.indexOf(img),
    });

    setShowModal(true);
  };

  return (
    <main>
      <section className="gallery">
        <ul className="gallery__list">
          {galleryImages.map((imgItem) => (
            <li key={imgItem.id} className="gallery__item">
              <img
                src={imgItem.img}
                alt="Фото"
                className="gallery__img modal-img"
                onClick={() => showModalHandler(imgItem)}
              />
            </li>
          ))}
        </ul>
      </section>

      {showModal ? (
        <ModalWindowImg modalImages={modalImages} setShowModal={setShowModal} />
      ) : null}
    </main>
  );
};

export default Gallery;
