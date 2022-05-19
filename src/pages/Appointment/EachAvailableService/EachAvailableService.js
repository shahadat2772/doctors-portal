import React from "react";

const EachAvailableService = ({ service, setTreatment }) => {
  const { treatmentName, slots, _id, price } = service;
  return (
    <div className="card w-80 md:w-96 bg-base-100 shadow">
      <div className="card-body p-4 items-center text-center">
        <h2 className="card-title text-xl text-secondary">{treatmentName}</h2>

        <div>
          {slots.length ? (
            slots[0]
          ) : (
            <p className="text-red-500 block">TRY ANOTHER DAY.</p>
          )}
        </div>

        <p className="text-[15px]">
          {slots.length} {slots.length > 1 ? "SPACES" : "SPACE"} AVAILABLE
        </p>
        <p>
          <small>Price ${price}</small>
        </p>
        <div className="card-actions">
          <label
            disabled={slots.length === 0}
            onClick={() => setTreatment(service)}
            htmlFor="booking-modal"
            className="btn bg-gradient-to-r  py-0 from-secondary border-0 to-primary text-white text-sm"
          >
            BOOK APPOINTMENT
          </label>
        </div>
      </div>
    </div>
  );
};

export default EachAvailableService;
