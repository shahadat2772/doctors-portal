import React from "react";

const EachAvailableService = ({ service, setTreatment }) => {
  const { name, slots, _id } = service;
  return (
    <div className="card w-80 md:w-96 bg-base-100 shadow-xl">
      <div className="card-body p-4 items-center text-center">
        <h2 className="card-title text-xl text-secondary">{name}</h2>

        <div>
          {slots.length ? (
            slots.map((slot) => (
              <p key={slot} className="text-sm">
                {slot}
              </p>
            ))
          ) : (
            <p className="text-red-500 block">TRY ANOTHER DAY.</p>
          )}
        </div>

        <p className="text-[15px]">
          {slots.length} {slots.length > 1 ? "SPACES" : "SPACE"} AVAILABLE
        </p>
        <div className="card-actions">
          <label
            disabled={slots.length === 0}
            onClick={() => setTreatment(service)}
            htmlFor="booking-modal"
            className="btn w-[120px] bg-gradient-to-r from-secondary border-0 to-primary text-white"
          >
            BOOK APPOINTMENT
          </label>
        </div>
      </div>
    </div>
  );
};

export default EachAvailableService;
