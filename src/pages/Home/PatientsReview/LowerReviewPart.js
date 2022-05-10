import React, { useEffect, useState } from "react";
import EachReview from "./EachReview";

const LowerReviewPart = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="grid md:grid-cols-3 justify-items-center container mx-auto gap-4">
      {reviews.map((review) => (
        <EachReview key={review._id} review={review}></EachReview>
      ))}
    </div>
  );
};

export default LowerReviewPart;
