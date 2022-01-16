import React from "react";

// import icon1 from "../../../img/home/icon-1.png";
import icon1 from "../../../img/test/ninja.svg";

const benefitsList = [
  {
    id: 1,
    description: "Запись на удобное для Вас время",
    title: "Удобное время",
    icon: icon1,
  },
  {
    id: 2,
    description: "Скидка 50% на первое посещение",
    title: "Скидка 50%",
    icon: icon1,
  },
  {
    id: 3,
    description: "Принимаю клиентов дома и на выезеде",
    title: "Удобное место",
    icon: icon1,
  },
];

const SectionHomeBenefits = () => {
  return (
    <section className="home__benefits home-benefits">
      <ul className="home-benefits__list">
        {benefitsList.map((benefits) => (
          <li key={benefits.id} className="home-benefits__item">
            <img
              src={benefits.icon}
              alt="Иконка"
              className="home-benefits__icon"
            />
            <h2 className="home-benefits__title">{benefits.title}</h2>
            <p className="home-benefits__description">{benefits.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SectionHomeBenefits;
