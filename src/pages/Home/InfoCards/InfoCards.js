import React from "react";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import callIcon from "../../../assets/icons/phone.svg";

const InfoCards = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6 ">
      <div className="card mx-4 md:mx-0 px-6 md:pt-0 pt-6 lg:card-side shadow-xl bg-gradient-to-r from-secondary to-primary">
        <figure>
          <img src={clock} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xl">Opening Hours</h2>
          <p className="text-sm">Lorem Ipsum is simply dummy text of the pri</p>
        </div>
      </div>
      <div className="card mx-4 md:mx-0 px-6 md:pt-0 pt-6 lg:card-side  shadow-xl bg-accent">
        <figure>
          <img src={marker} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xl">Visit our location</h2>
          <p className="text-sm">Brooklyn, NY 10036, United States</p>
        </div>
      </div>
      <div className="card mx-4 md:mx-0 px-6 md:pt-0 pt-6 lg:card-side  shadow-xl bg-gradient-to-r from-secondary to-primary">
        <figure>
          <img src={callIcon} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xl">Contact us now</h2>
          <p className="text-sm">+000 123 456789</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCards;
