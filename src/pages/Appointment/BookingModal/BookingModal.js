import React from "react";
import { format } from "date-fns";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase.init";
import toast from "react-hot-toast";

const BookingModal = ({ treatment, date, setTreatment }) => {
  const { treatmentName, slots, _id } = treatment;
  const [user, loading] = useAuthState(auth);

  console.log(user);

  const handleBooking = (e) => {
    e.preventDefault();
    const slot = e.target.slot.value;
    const date = e.target.date.value;
    const name = e.target.name.value;
    const phoneNumber = e.target.number.value;
    const email = e.target.email.value;

    const bookedTreatment = {
      treatmentId: _id,
      treatmentName,
      date,
      slot,
      patientName: name,
      patientEmail: email,
      phoneNumber,
    };

    fetch("http://localhost:5000/bookAppointment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookedTreatment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          // Closing the install
          toast.success(`Appointment booked successfully, ${date} at ${slot}`);
          setTreatment(null);
          console.log(data);
        } else {
          toast.error(
            `You already have an Appointment on, ${data.booking.date} at ${data.booking.slot}`
          );
          console.log(data);
          setTreatment(null);
        }
      });
  };

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
              {slots?.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              // placeholder="Full Name"
              value={user?.displayName || ""}
              disabled
              className="w-full input input-bordered mb-4 "
            />

            <input
              type="email"
              name="email"
              // placeholder="Email"
              value={user?.email || ""}
              disabled
              className="w-full input input-bordered mb-4 "
            />
            <input
              type="text"
              name="number"
              placeholder="Phone Number"
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
