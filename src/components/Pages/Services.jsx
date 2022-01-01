import React, { useState } from "react";
import NavServices from "../Nav/NavServices";

import { servicesList } from "../../helpers/services";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import ServicesItem from "./Services/ServicesItem";
import ServicesSorting from "./Services/ServicesSorting";

const Services = () => {
  const [services, setServices] = useState(servicesList);
  const { path } = useRouteMatch();

  return (
    <main className="services">
      <NavServices services={services} />

      <ServicesSorting setServices={setServices} />

      <Switch>
        {services.map((service) => (
          <Route
            key={service.id}
            path={`${path}/${service.link.split("/")[1]}`}
          >
            <ServicesItem service={service} />
          </Route>
        ))}

        <Route path={`${path}/all`}>
          <ServicesItem service={{ price: "test" }} />
        </Route>
      </Switch>
    </main>
  );
};

export default Services;
