import React from "react";
import { NavLink, useRouteMatch } from "react-router-dom";

const NavServices = ({ services }) => {
  const { url } = useRouteMatch();
  console.log(url);

  return (
    <nav className="services__nav">
      <ul className="services__nav-list">
        {services.map((service) => (
          <li key={service.id} className="services__nav-item">
            <NavLink
              to={`${url}/${service.link.split("/")[1]}`}
              className="nav__link"
              activeClassName="nav__link nav__link_active"
            >
              {service.title}
            </NavLink>
          </li>
        ))}
        <li className="services__nav-item">
          <NavLink
            to={`${url}/all`}
            className="nav__link"
            activeClassName="nav__link nav__link_active"
          >
            Все
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavServices;
