import React from "react";

const EachAvailableService = ({ service, setTreatment }) => {
  const { name, slots, _id } = service;
  return (
    <div class="card w-80 md:w-96 bg-base-100 shadow-xl">
      <div class="card-body p-4 items-center text-center">
        <h2 class="card-title text-secondary">{name}</h2>

        <div>
          {slots.length ? (
            slots.map((slot) => <p className="text-sm">{slot}</p>)
          ) : (
            <p className="text-red-500 block">TRY ANOTHER DAY.</p>
          )}
        </div>

        <p className="text-[15px]">
          {slots.length} {slots.length > 1 ? "SPACES" : "SPACE"} AVAILABLE
        </p>
        <div class="card-actions">
          <label
            disabled={slots.length === 0}
            onClick={() => setTreatment(service)}
            for="booking-modal"
            class="btn btn-secondary text-white"
          >
            {" "}
            BOOK APPOINTMENT
          </label>
        </div>
      </div>
    </div>
  );
};

export default EachAvailableService;
