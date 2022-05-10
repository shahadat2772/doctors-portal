import React, { useEffect, useState } from "react";
import EachServiceForPart1 from "./EachServiceForPart1";

const ServicesPart1 = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  console.log(services);

  return (
    <div className="my-6 grid md:grid-cols-3 justify-items-center gap-6 container mx-auto mt-16 servicesPart1Container">
      {services.map((service) => (
        <EachServiceForPart1
          key={service.id}
          service={service}
        ></EachServiceForPart1>
      ))}
    </div>
  );
};

export default ServicesPart1;
