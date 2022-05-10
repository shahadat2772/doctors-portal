import React from "react";
import "./ServicesPart2.css";

const ServicesPart2 = () => {
  return (
    <div class="hero min-h-screen py-12">
      <div class="hero-content flex-col lg:flex-row">
        <img
          src="https://i.ibb.co/1bdwC5f/treatment.png"
          className="bannerImgForServices rounded-lg shadow-2xl"
        />
        <div className="bannerTextForServices md:pl-8 pl-0 pt-8 md:pt-0 md:w-2/4">
          <h1 class="text-5xl font-bold">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p class="py-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default ServicesPart2;
