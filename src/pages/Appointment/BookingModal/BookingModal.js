import React from "react";
import { format } from "date-fns";

const BookingModal = ({ treatment, date }) => {
  const { name, slots, _id } = treatment;

  const handleBooking = (e) => {
    e.preventDefault();
    const slot = e.target.slot.value;
    console.log(slot);
  };

  console.log(date);
  return (
    <div>
      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="booking-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            htmlFor="booking-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-bold text-lg pb-3 pl-1">Book {name}</h3>
          {/* Booking form */}
          <form onSubmit={handleBooking} action="">
            <input
              disabled
              type="text"
              value={format(date, "PP")}
              class="w-full input input-bordered mb-4 "
            />
            <select name="slot" class="w-full input input-bordered mb-4 ">
              {slots?.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              class="w-full input input-bordered mb-4 "
            />
            <input
              type="text"
              name="number"
              placeholder="Phone Number"
              class="w-full input input-bordered mb-4 "
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              class="w-full input input-bordered mb-4 "
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
