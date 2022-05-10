import React from "react";
import MainBtn from "../../Shared/MainBtn/MainBtn";
import "./MakeAppointment.css";

const MakeAppointment = () => {
  return (
    <section
      style={{
        backgroundImage: `url('https://i.ibb.co/thZvpDP/appointment.png')`,
      }}
      className="my-20 md:flex justify-center items-center "
    >
      <div className="flex-1">
        <img
          className="mt-[-120px]"
          src="https://i.ibb.co/6Nysx9m/doctor-small.png"
          alt=""
        />
      </div>
      <div className="flex-1 text-white md:pr-[40px] pr-2 pl-2 py-16">
        <h3 className="text-xl font-medium text-primary pb-3">Appointment</h3>
        <h1 className="text-3xl font-bold">Make an appointment Today</h1>
        <p className="py-5 text-sm">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <MainBtn>GET STARTED</MainBtn>
      </div>
    </section>
  );
};

export default MakeAppointment;
