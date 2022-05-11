import React from "react";
import { format } from "date-fns";

const BookingModal = ({ treatment, date, setTreatment }) => {
  const { treatmentName, slots, _id } = treatment;

  const handleBooking = (e) => {
    e.preventDefault();
    const slot = e.target.slot.value;
    const date = e.target.date.value;
    const name = e.target.name.value;
    const phoneNumber = e.target.number.value;
    const email = e.target.email.value;

    const bookedAppointment = {
      treatmentName,
      date,
      slot,
      name,
      phoneNumber,
      email,
    };

    fetch("http://localhost:5000/bookAppointment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookedAppointment),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTreatment(null);
      });
  };

  console.log(date);
  return (
    <div>
      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg pb-3 pl-1">Book {treatmentName}</h3>
          {/* Booking form */}
          <form onSubmit={handleBooking} action="">
            <input
              disabled
              name="date"
              type="text"
              value={format(date, "PP")}
              className="w-full input input-bordered mb-4 "
            />
            <select name="slot" className="w-full input input-bordered mb-4 ">
              {slots?.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="w-full input input-bordered mb-4 "
            />
            <input
              type="text"
              name="number"
              placeholder="Phone Number"
              className="w-full input input-bordered mb-4 "
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full input input-bordered mb-4 "
            />
            <input
              className="w-full h-[48px] text-white rounded-[10px] bg-accent"
              type="submit"
              value={`SUBMIT`}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
