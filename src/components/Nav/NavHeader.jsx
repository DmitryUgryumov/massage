import React from "react";
import { NavLink, useHistory } from "react-router-dom";

const NavHeader = () => {
  const history = useHistory();

  // нужно чтобы оба линка оставались активны ('Услуги' и 'Все')
  const pushToURL = () => {
    history.push("/services/all");
  };

  return (
    <header>
      <nav className="nav">
        <ul className="nav__ul">
          <li className="nav__li">
            <NavLink
              exact
              to="/"
              className="nav__link"
              activeClassName="nav__link nav__link_active"
            >
              Главная
            </NavLink>
          </li>

          <li className="nav__li">
            <NavLink
              to="/about"
              className="nav__link"
              activeClassName="nav__link nav__link_active"
            >
              Обо мне
            </NavLink>
          </li>

          <li className="nav__li" onClick={pushToURL}>
            <NavLink
              to="/services"
              className="nav__link"
              activeClassName="nav__link nav__link_active"
            >
              Услуги и цены
            </NavLink>
          </li>

          <li className="nav__li">
            <NavLink
              to="/gallery"
              className="nav__link"
              activeClassName="nav__link nav__link_active"
            >
              Галерея
            </NavLink>
          </li>

          <li className="nav__li">
            <NavLink
              to="/contacts"
              className="nav__link"
              activeClassName="nav__link nav__link_active"
            >
              Контакты
            </NavLink>
          </li>

          <li className="nav__li">
            <NavLink
              to="/recording"
              className="nav__link"
              activeClassName="nav__link nav__link_active"
            >
              Запись
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavHeader;
