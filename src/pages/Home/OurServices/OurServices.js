import React from "react";
import ServicesPart1 from "./ServicesPart1";
import ServicesPart2 from "./ServicesPart2";

const OurServices = () => {
  return (
    <div className="my-24">
      <h2 className="text-center text-xl font-semibold text-primary">
        OUR SERVICES
      </h2>
      <h2 className="text-center text-3xl font-medium mt-2">
        Services We Provide
      </h2>
      <ServicesPart1></ServicesPart1>
      <ServicesPart2></ServicesPart2>
    </div>
  );
};

export default OurServices;
