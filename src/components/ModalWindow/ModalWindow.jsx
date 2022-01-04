import React, { useEffect, useRef, useState } from "react";

import right from "../../img/gallery/right-arrow.svg";
import left from "../../img/gallery/left-arrow.svg";

const ModalWindow = ({ modalImages, setShowModal }) => {
  const [index, setIndex] = useState(modalImages.index);
  const img = useRef(null);
  const indexSpan = useRef(null);

  useEffect(() => {
    document.documentElement.addEventListener("keydown", modalKeyDownHandler);
    document.body.style.overflow = "hidden";

    return () => {
      document.documentElement.removeEventListener(
        "keydown",
        modalKeyDownHandler
      );

      document.body.style.overflow = "auto";
    };
  }, []);

  const modalKeyDownHandler = (e) => {
    if (e.keyCode === 27) {
      closeModal(e);
    } else if (e.keyCode === 39) {
      nextImg();
    } else if (e.keyCode === 37) {
      backImg();
    }
  };

  const nextImg = () => {
    setIndex((prev) => (prev === modalImages.images.length - 1 ? 0 : prev + 1));
  };

  const backImg = () =>
    setIndex((prev) => (prev === 0 ? modalImages.images.length - 1 : prev - 1));

  const closeModal = (e) => {
    if (
      e.target.className === "modal__container" ||
      e.target.className === "modal__index" ||
      e.target.className === "modal__button" ||
      e.target.tagName === "IMG"
    ) {
      return false;
    }

    img.current.classList.add("modal__img_closed");
    indexSpan.current.classList.add("modal__index_closed");

    setTimeout(() => {
      img.current.classList.remove("modal__img_closed");
      indexSpan.current.classList.remove("modal__index_closed");
      setShowModal(false);
    }, 280);
  };

  return (
    <div className="modal" onClick={closeModal}>
      <div className="modal__container">
        <img
          src={modalImages.images[index].icon}
          alt=""
          className="modal__img"
          ref={img}
        />
        <span className="modal__index" ref={indexSpan}>
          {`${index + 1}/${modalImages.images.length}`}
        </span>
      </div>
      <button className="modal__button modal__button_left" onClick={backImg}>
        <img src={left} alt="" />
      </button>
      <button className="modal__button modal__button_right" onClick={nextImg}>
        <img src={right} alt="" />
      </button>
    </div>
  );
};

export default ModalWindow;
