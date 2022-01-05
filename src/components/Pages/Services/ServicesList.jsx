import React from "react";

import ServicesItem from "./ServicesItem";

const ServicesList = ({ services }) => {
  return (
    <>
      <ul className="services__list">
        {services.map((service) => (
          <ServicesItem key={service.id} service={service} />
        ))}
      </ul>
    </>
  );
};

export default ServicesList;
