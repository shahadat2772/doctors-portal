import { format } from "date-fns";
import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const AppointmentBanner = ({ dateState }) => {
  console.log(dateState);
  const [date, setDate] = dateState;

  console.log(date);

  let footer = <p>Please pick a day.</p>;
  if (date) {
    footer = <p>You picked {format(date, "PP")}.</p>;
  }

  return (
    <div>
      <div
        style={{
          backgroundImage: `url('https://i.ibb.co/8r9ZCnQ/bg.png')`,
          backgroundSize: `cover`,
        }}
        className="hero min-h-screen"
      >
        <div className="hero-content gap-10 flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/5MWmg5w/chair.png"
            className="md:w-5/12 rounded-lg shadow-2xl"
            alt="dentist"
          />
          <div className="shadow-xl rounded-xl">
            <DayPicker
              mode="single"
              selected={date}
              onSelect={setDate}
              footer={footer}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
