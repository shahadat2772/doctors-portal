import React from "react";

const EachServiceForPart1 = ({ service }) => {
  const { _id, name, description, img } = service;

  return (
    <div className="card w-80 md:w-96 bg-base-100 shadow-xl">
      <figure className="px-4 pt-4">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body p-6 items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default EachServiceForPart1;
