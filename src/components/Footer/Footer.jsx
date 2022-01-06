import React from "react";

import icon1 from "../../img/footer/social-icon-1.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <a className="footer__mail" href="mailto: example@mail.ru">
          <span>example@mail.ru</span>
        </a>
        <a href="tel: +79999999999" className="footer__tel">
          <span>+7-999-999-99-99</span>
        </a>
        <div className="footer__socials">
          <a
            href="https://www.instagram.com/airanela/"
            target="_blank"
            className="footer__link"
          ></a>
          <a
            href="https://wa.me/89122446284"
            target="_blank"
            className="footer__link"
          ></a>
          <a
            href="https://telegram.im/@peeach322"
            target="_blank"
            className="footer__link"
          ></a>
          <a
            href="https://vk.com/dikiypers"
            target="_blank"
            className="footer__link"
          ></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
