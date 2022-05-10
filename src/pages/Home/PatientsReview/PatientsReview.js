import React from "react";
import LowerReviewPart from "./LowerReviewPart";
import UpperReviewPart from "./UpperReviewPart";

const PatientsReview = () => {
  return (
    <div className="py-8">
      <UpperReviewPart></UpperReviewPart>
      <LowerReviewPart></LowerReviewPart>
    </div>
  );
};

export default PatientsReview;
