import React, { useState } from "react";
import NavServices from "../Nav/NavServices";

import { servicesList } from "../../helpers/services";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import ServicesItem from "./Services/ServicesItem";
import ServicesSorting from "./Services/ServicesSorting";
import ServicesList from "./Services/ServicesList";

const Services = () => {
  const [services, setServices] = useState(servicesList);
  const { path } = useRouteMatch();

  return (
    <main>
      <section className="services">
        <NavServices services={servicesList} />

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
        </Switch>
      </section>
    </main>
  );
};

export default Services;
