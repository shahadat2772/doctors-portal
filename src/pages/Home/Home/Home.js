import React from "react";
import Banner from "../Banner/Banner";
import Info from "../Info/Info";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import OurServices from "../OurServices/OurServices";
import PatientsReview from "../PatientsReview/PatientsReview";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Info></Info>
      <OurServices></OurServices>
      <MakeAppointment></MakeAppointment>
      <PatientsReview></PatientsReview>
    </div>
  );
};

export default Home;
