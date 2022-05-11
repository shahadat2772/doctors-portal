import React from "react";

const StayConnected = () => {
  return (
    <div
      className="hero min-h-screen mt-16"
      style={{
        backgroundImage: `url('https://i.ibb.co/thZvpDP/appointment.png')`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h2 className="text-xl text-primary font-medium text-center">
            Contact Us
          </h2>
          <h2 className="text-4xl text-center">Stay connected with us</h2>
          <form className="mt-4">
            <input
              type="text"
              placeholder="Email Address"
              className="input input-bordered w-full mb-4"
            />
            <input
              type="text"
              placeholder="Subject"
              className="input input-bordered w-full mb-4"
            />

            <textarea
              className="textarea h-32 w-full mb-4"
              placeholder="Your Message"
            ></textarea>
            <input
              className="btn text-white border-0 bg-gradient-to-r from-secondary to-primary w-36"
              type="submit"
              value="SUBMIT"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default StayConnected;
