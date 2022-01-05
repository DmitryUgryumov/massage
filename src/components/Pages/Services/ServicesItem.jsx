import React, { useContext } from "react";
import Context from "../../Context/Context";

const ServicesItem = ({ service }) => {
  const { setShowModal, setModalImages } = useContext(Context);

  const showModalHandler = () => {
    setModalImages({
      images: [{ id: 1, img: service.img }],
      index: 0,
      location: window.location.href,
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
    </li>
  );
};

export default ServicesItem;
