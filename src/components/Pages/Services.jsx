import React, { useContext, useEffect, useState } from "react";

import { servicesList } from "../../helpers/services";

import ServicesSorting from "./Services/ServicesSorting";
import ServicesList from "./Services/ServicesList";
import Context from "../Context/Context";

const Services = () => {
  const [services, setServices] = useState(servicesList);
  const { activeService, setActiveService } = useContext(Context);

  useEffect(() => {
    if (activeService) {
      const service = document.querySelector(`#${activeService}`);
      service.classList.add("services__item_active");
      service.scrollIntoView();

      document.documentElement.scrollTop -= service.scrollHeight / 2;
    }

    return function () {
      if (activeService) {
        setActiveService(null);
      }
    };
  }, []);

  return (
    <main>
      <section className="services">
        <ServicesSorting setServices={setServices} />
        <ServicesList services={services} />
      </section>
    </main>
  );
};

export default Services;
