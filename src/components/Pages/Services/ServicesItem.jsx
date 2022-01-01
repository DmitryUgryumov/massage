import React from "react";

const ServicesItem = ({ service }) => {
  return (
    <div>
      {service.title}
      <br />
      {service.price}
      <br />
      {service.time}
    </div>
  );
};

export default ServicesItem;
