import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../Hooks/UseAxiosSecure";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import moment from "moment/moment";

const CheckoutForm = ({ price, packageName }) => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const totalPrice = price;
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          // console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      // console.log("[error]", error);
      setError(error.message);
    } else {
      // console.log("[PaymentMethod]", paymentMethod);
      setError("");
    }

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      // console.log("confirm error");
    } else {
      // console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        // console.log("transaction id", paymentIntent.id);
        setTransactionId(paymentIntent.id);

        // save payments to db
        const payment = {
          email: user?.email,
          name: user?.displayName,
          date: moment().format("LL"),
          amount: price,
          membership: packageName,
          trxId: paymentIntent.id,
        };

        axiosSecure.post("/payments", payment).then((res) => {
          if (res.data.insertedId) {
            toast.success("Payment Successful!");

            // Now patch the user's membership
            axiosSecure
              .patch(`/users/membership`, {
                email: user?.email,
                membership: packageName,
              })
              .then((updateRes) => {
                if (updateRes.data.modifiedCount > 0) {
                  toast.success(`Membership upgraded to ${packageName}!`);
                }
              });
          }
        });
      }
    }
  };

  return (
    <div className="">
      <form className=""   onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#000000",
                "::placeholder": {
                  color: "#ffffff",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className=" btn bg-[#2c2c2c] rounded-lg  mt-4 border-none text-white"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
        <p className="text-red-600">{error}</p>
        {transactionId && (
          <p className="text-blue-600">
            {" "}
            <span className="text-black ">Your transaction id: </span>{transactionId}
          </p>
        )}
        <p className="text-red-600">{error}</p>
      </form>
    </div>
  );
};

export default CheckoutForm;
