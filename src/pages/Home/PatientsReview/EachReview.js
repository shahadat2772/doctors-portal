import React from "react";

const EachReview = ({ review }) => {
  const { _id, description, img, country, userName } = review;
  return (
    <div className="card md:w-96 w-80 shadow-xl md:mb-0 mb-2">
      <div className="card-body p-6">
        <p className="pb-6 text-sm">{description}</p>
        <div className="userInfo flex items-center">
          <div className="img">
            <img className="w-14" src={img} alt="" />
          </div>
          <div className="info ml-2">
            <h1 className="text-xl">{userName}</h1>
            <h3 className="text-sm">{country}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachReview;
