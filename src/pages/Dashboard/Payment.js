import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Result } from "postcss";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L105BIxM8sRxo2mh9agH6bogilwho5NgGj1UqtzfXtlLoaBTG4ufhc31Kem5Og0H5bfx1cfv87lGEZTNgDWGTTR007hgLkB5x"
);

const Payment = () => {
  const { id } = useParams();

  const { data: appointment, isLoading } = useQuery(["bookingById", id], () =>
    fetch(`http://localhost:5000/booking/${id}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  const { treatmentName, date, price, patientName, slot, patientEmail } =
    appointment;

  console.log(appointment);

  return (
    <div>
      <div className="hero min-h-screen">
        <div className="flex-col">
          <div className="card md:w-[480px] w-96 bg-base-100 mb-6 shadow-xl">
            <div className="card-body ">
              <h4 className=" text-secondary">Hello, {patientName}</h4>
              <h2 className="card-title">Please Pay for {treatmentName}</h2>
              <p>
                Your appointment {date} at {slot}, Total payable ${price}
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card md:w-[480px] w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <Elements stripe={stripePromise}>
                <CheckoutForm />
              </Elements>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
