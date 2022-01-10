import React from "react";

import icon1 from "../../../img/contacts/social-icon-1.png";
import icon2 from "../../../img/contacts/social-icon-2.png";
import icon3 from "../../../img/contacts/social-icon-3.png";
import icon4 from "../../../img/contacts/social-icon-4.png";

const ContactsDescription = () => {
  return (
    <div className="contacts__description">
      <div className="contacts__address">
        <h2 className="contacts__item-title contacts__item-title_first">
          Адрес:{" "}
        </h2>
        <p className="contacts__info">
          г. Екатеринбург, ул. Владимира Высоцкого 10
        </p>
      </div>

      <div className="contacts__tel">
        <h2 className="contacts__item-title">Телефон: </h2>
        <a href="tel: +79999999999" className="contacts__info">
          + 7-999-999-99-99
        </a>
      </div>

      <div className="contacts__mail">
        <h2 className="contacts__item-title">Почта: </h2>
        <a href="mailto: example@mail.ru" className="contacts__info">
          example@mail.ru
        </a>
      </div>

      <h2 className="contacts__item-title">Соц. сети и мессенджеры: </h2>
      <ul className="contacts__socials">
        <li>
          <a
            href="https://www.instagram.com/airanela/"
            target="_blank"
            className="contacts__social"
          >
            <div>
              <img src={icon1} alt="" className="contacts__icon" />
              <p>airanela</p>
            </div>
          </a>
        </li>

        <li>
          <a
            href="https://wa.me/89122446284"
            target="_blank"
            className="contacts__social"
          >
            <div>
              <img src={icon2} alt="" className="contacts__icon" />
              <p>89122446284</p>
            </div>
          </a>
        </li>

        <li>
          <a
            href="https://telegram.im/@peeach322"
            target="_blank"
            className="contacts__social"
          >
            <div>
              <img src={icon3} alt="" className="contacts__icon" />
              <p>peeach322</p>
            </div>
          </a>
        </li>

        <li>
          <a
            href="https://vk.com/dikiypers"
            target="_blank"
            className="contacts__social"
          >
            <div>
              <img src={icon4} alt="" className="contacts__icon" />
              <p>dikiypers</p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContactsDescription;
