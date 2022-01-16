import React, { useContext, useEffect, useState } from "react";
import Context from "../../Context/Context";
import ModalWindowImg from "../../ModalWindow/ModalWindowImg";

const ServicesItem = ({ service }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalImages, setModalImages] = useState({
    images: [],
    index: null,
  });

  const showModalHandler = () => {
    setModalImages({
      images: [service.img],
      index: 0,
    });

    setShowModal(true);
  };

  return (
    <li className="services__item service" id={service.id}>
      <div className="service__flex-container">
        <img
          src={service.img}
          alt=""
          className="service__img modal-img"
          onClick={showModalHandler}
        />
      </div>
      <div className="service__flex-container">
        <h2 className="service__title">{service.title}</h2>
        <div className="service__info-item">
          <span>Описание: </span>
          <p className="service__description">{service.description}</p>
        </div>

        <div className="service__info-item">
          <span>Стоимость: </span>
          <p>{service.price}</p>
        </div>
        <div className="service__info-item">
          <span>Длительность: </span>
          <p>{service.time}</p>
        </div>
      </div>

      {showModal ? (
        <ModalWindowImg modalImages={modalImages} setShowModal={setShowModal} />
      ) : null}
    </li>
  );
};

export default ServicesItem;
