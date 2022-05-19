import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({ appointment }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [cardError, setCardError] = useState("");

  const [success, setSuccess] = useState("");

  const [Processing, setProcessing] = useState(false);

  const [clientSecret, setClientSecret] = useState("");

  const [transactionId, setTransactionId] = useState("");

  const { treatmentName, date, price, patientName, slot, patientEmail, _id } =
    appointment;

  useEffect(() => {
    if (price) {
      fetch("http://localhost:5000/create-payment-intent", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify({ price }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.clientSecret) {
            setClientSecret(data.clientSecret);
            console.log(clientSecret);
          }
          console.log(data);
        });
    }
  }, [price]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    setCardError(error?.message || "");
    setSuccess("");

    setProcessing(true);

    // Confirm card payment
    const { paymentIntent, error: intentErr } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: patientName,
            email: patientEmail,
          },
        },
      }
    );

    if (intentErr) {
      setCardError(intentErr.message);
      setProcessing(false);
    } else {
      setCardError("");
      console.log(paymentIntent);
      setSuccess("Congrats, Your payment is completed.");
      setTransactionId(paymentIntent.id);

      // UPDATE DOC on backend

      const payment = {
        appointment: _id,
        transactionId: paymentIntent.id,
      };

      fetch(`http://localhost:5000/booking/${_id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify({ payment }),
      })
        .then((res) => res.json())
        .then((data) => {
          setProcessing(false);
          console.log(data);
        });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-sm"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-500 text-sm">{cardError}</p>}
      {success && (
        <div className="text-green-500 text-sm">
          <p>{success}</p>
          <p className="text-orange-500 font-semibold">
            Your transaction id {transactionId}
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
