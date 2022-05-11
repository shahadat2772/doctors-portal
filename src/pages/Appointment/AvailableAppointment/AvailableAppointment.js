import { format } from "date-fns";
import React from "react";

const AvailableAppointment = ({ dateState }) => {
  console.log(dateState);
  const [date, setDate] = dateState;

  return (
    <div>
      <h3 className="text-xl text-primary text-center font-normal">
        Available Appointments on {format(date, "PP")}
      </h3>
    </div>
  );
};

export default AvailableAppointment;
