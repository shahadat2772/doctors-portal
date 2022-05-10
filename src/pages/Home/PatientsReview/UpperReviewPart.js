import React from "react";
import quote from "../../../assets/icons/quote.svg";

const UpperReviewPart = () => {
  return (
    <div className="flex my-20 justify-between mx-4 md:mx-10">
      <div>
        <h3 className="text-xl text-primary">Testimonial</h3>
        <h2 className="text-2xl">What Our Patients Says</h2>
      </div>
      <div>
        <img className="md:w-40 w-28" src={quote} alt="" />
      </div>
    </div>
  );
};

export default UpperReviewPart;
