import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { servicesList } from "../../../helpers/services";
import Context from "../../Context/Context";

const SectionHomeServices = () => {
  const { activeService, setActiveService } = useContext(Context);

  const changeActiveServicesHandler = (id) => {
    setActiveService(id);
  };

  return (
    <section className="home__services home-services">
      <h2 className="section-title">Виды массажа</h2>
      <ul className="home-services__list">
        {servicesList.map((service) => (
          <li key={service.id} className="home-services__item">
            {/*<Link to={service.link} className="home-services__link_img">*/}
            <Link
              to="/services"
              className="home-services__link_img"
              onClick={(e) => changeActiveServicesHandler(service.id)}
            >
              <img
                src={service.icon}
                alt="Массаж"
                className="home-services__icon"
              />
            </Link>

            <h2 className="home-services__title">
              {/*<Link to={service.link}>{service.title}</Link>*/}
              <Link
                to="/services"
                onClick={(e) => changeActiveServicesHandler(service.id)}
              >
                {service.title}
              </Link>
            </h2>

            <p className="home-services__shot-description">
              {service.shotDescription}
            </p>
            <p className="home-services__price">{service.price}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SectionHomeServices;
