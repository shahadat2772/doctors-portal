import { format } from "date-fns";
import React, { useEffect, useState } from "react";

import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
import BookingModal from "../BookingModal/BookingModal";
import EachAvailableService from "../EachAvailableService/EachAvailableService";

const AvailableAppointment = ({ dateState }) => {
  const [date, setDate] = dateState;

  console.log(date);

  // const [services, setServices] = useState([]);

  const [treatment, setTreatment] = useState(null);

  const formattedDate = format(date, "PP");

  const {
    data: services,
    isLoading,
    refetch,
  } = useQuery(["available", formattedDate], () =>
    fetch(`http://localhost:5000/available?date=${formattedDate}`).then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    <Loading></Loading>;
  }

  return (
    <div className="my-16">
      <h3 className="text-xl text-secondary text-center font-normal">
        Available Appointments on {format(date, "PP")}
      </h3>

      <div className="availableServiceContainer justify-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
        {services?.map((service) => (
          <EachAvailableService
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          ></EachAvailableService>
        ))}
      </div>
      {/* Setting treatment for book */}
      {treatment && (
        <BookingModal
          date={date}
          setTreatment={setTreatment}
          treatment={treatment}
          refetch={refetch}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointment;
