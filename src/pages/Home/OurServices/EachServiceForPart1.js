import React from "react";

const EachServiceForPart1 = ({ service }) => {
  console.log(service);

  const { id, name, description, img } = service;

  return (
    <div class="card w-80 md:w-96 bg-base-100 shadow-xl">
      <figure class="px-4 pt-4">
        <img src={img} alt="Shoes" class="rounded-xl" />
      </figure>
      <div class="card-body p-6 items-center text-center">
        <h2 class="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default EachServiceForPart1;
