import React, { useState } from "react";
import Footer from "../../Shared/Footer/Footer";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import AvailableAppointment from "../AvailableAppointment/AvailableAppointment";

const Appointment = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <AppointmentBanner dateState={[date, setDate]}></AppointmentBanner>
      <AvailableAppointment dateState={[date, setDate]}></AvailableAppointment>
      <Footer></Footer>
    </div>
  );
};

export default Appointment;
