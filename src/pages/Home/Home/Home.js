import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Banner from "../Banner/Banner";
import Info from "../Info/Info";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import OurServices from "../OurServices/OurServices";
import PatientsReview from "../PatientsReview/PatientsReview";
import StayConnected from "../StayConnected/StayConnected";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Info></Info>
      <OurServices></OurServices>
      <MakeAppointment></MakeAppointment>
      <PatientsReview></PatientsReview>
      <StayConnected></StayConnected>
      <Footer></Footer>
    </div>
  );
};

export default Home;
