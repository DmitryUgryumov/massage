import React from "react";

const ServicesItem = ({ service }) => {
  return (
    <li className="services__item service" id={service.id}>
      <div className="service__flex-container">
        <img src={service.icon} alt="" className="service__icon" />
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
