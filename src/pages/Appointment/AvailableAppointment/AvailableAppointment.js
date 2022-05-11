import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "../BookingModal/BookingModal";
import EachAvailableService from "../EachAvailableService/EachAvailableService";

const AvailableAppointment = ({ dateState }) => {
  const [date, setDate] = dateState;

  const [services, setServices] = useState([]);

  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="my-16">
      <h3 className="text-xl text-secondary text-center font-normal">
        Available Appointments on {format(date, "PP")}
      </h3>

      <div className="availableServiceContainer justify-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
        {services.map((service) => (
          <EachAvailableService
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          ></EachAvailableService>
        ))}
      </div>
      {treatment && (
        <BookingModal
          date={date}
          setTreatment={setTreatment}
          treatment={treatment}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointment;
