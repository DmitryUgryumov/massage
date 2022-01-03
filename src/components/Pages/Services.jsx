import React, { useContext, useEffect, useRef, useState } from "react";
import NavServices from "../Nav/NavServices";

import { servicesList } from "../../helpers/services";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import ServicesItem from "./Services/ServicesItem";
import ServicesSorting from "./Services/ServicesSorting";
import ServicesList from "./Services/ServicesList";
import Context from "../Context/Context";

const Services = () => {
  const [services, setServices] = useState(servicesList);
  const { activeService, setActiveService } = useContext(Context);

  useEffect(() => {
    if (activeService) {
      const service = document.querySelector(`#${activeService}`);
      console.dir(service);
      service.classList.add("services__item_active");
      service.scrollIntoView();

      document.documentElement.scrollTop -= service.scrollHeight / 2;

      // service.scrollTop += 1000;
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
        {/*        <NavServices services={servicesList} />

        <Switch>
          {servicesList.map((service) => (
            <Route
              key={service.id}
              path={`${path}/${service.link.split("/")[1]}`}
            >
              <ServicesItem service={service} />
            </Route>
          ))}

          <Route path={`${path}/all`}>
            <ServicesSorting setServices={setServices} />
            <ServicesList services={services} />
          </Route>
        </Switch>*/}
        <ServicesSorting setServices={setServices} />
        <ServicesList services={services} />
      </section>
    </main>
  );
};

export default Services;
