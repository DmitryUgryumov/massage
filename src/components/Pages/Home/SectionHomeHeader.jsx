import React, { useEffect, useRef } from "react";

const SectionHomeHeader = () => {
  return (
    <section className="home__header home-header">
      <ul className="home-header__slides">
        <li></li>
        <li></li>
        <li></li>
      </ul>

      <div className="home-header__content">
        <h2 className="home-header__title">Массаж</h2>
        <p className="home-header__description">Краткое описание</p>
      </div>
    </section>
  );
};

export default SectionHomeHeader;
