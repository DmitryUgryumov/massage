import React, { useEffect, useRef, useState } from "react";

import right from "../../img/gallery/right-arrow.svg";
import left from "../../img/gallery/left-arrow.svg";

const noHiddenClasses = [
  "modal__container",
  "modal__index",
  "modal__button",
  "modal__img",
  "modal__arrow",
];

const ModalWindow = ({ modalImages, setShowModal }) => {
  const [index, setIndex] = useState(modalImages.index);
  const img = useRef(null);
  const indexSpan = useRef(null);
  const modal = useRef(null);

  useEffect(() => {
    document.documentElement.addEventListener("keydown", modalKeyDownHandler);
    document.body.style.overflow = "hidden";
    modal.current.style.background = "rgba(0, 0, 0, .7)";

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
    if (modalImages.images.length < 2) {
      return;
    }
    setIndex((prev) => (prev === modalImages.images.length - 1 ? 0 : prev + 1));
  };

  const backImg = () => {
    if (modalImages.images.length < 2) {
      return;
    }

    setIndex((prev) => (prev === 0 ? modalImages.images.length - 1 : prev - 1));
  };

  const closeModal = (e) => {
    const buttons = document.querySelectorAll(".modal__button");

    if (noHiddenClasses.includes(e.target.className)) {
      return false;
    }
    img.current.classList.add("modal__img_closed");
    indexSpan.current.classList.add("modal__index_closed");
    modal.current.style.background = "rgba(0, 0, 0, 0)";

    if (buttons.length) {
      Array.from(buttons).forEach((button) => (button.style.display = "none"));
    }

    setTimeout(() => {
      img.current.classList.remove("modal__img_closed");
      indexSpan.current.classList.remove("modal__index_closed");
      setShowModal(false);
    }, 450);
  };

  return (
    <div className="modal" ref={modal} onClick={closeModal}>
      <div className="modal__container">
        <img
          src={modalImages.images[index].img}
          alt=""
          className="modal__img"
          ref={img}
        />
        <span className="modal__index" ref={indexSpan}>
          {`${index + 1}/${modalImages.images.length}`}
        </span>
      </div>
      {modalImages.images.length > 1 ? (
        <>
          <button
            className="modal__button modal__button_left"
            onClick={backImg}
          >
            <img src={left} alt="" className="modal__arrow" />
          </button>
          <button
            className="modal__button modal__button_right"
            onClick={nextImg}
          >
            <img src={right} alt="" className="modal__arrow" />
          </button>
        </>
      ) : null}
    </div>
  );
};

export default ModalWindow;
