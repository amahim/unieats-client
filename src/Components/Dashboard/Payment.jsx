// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js"
// import CheckoutForm from "./CheckoutForm";
// import { useLocation, useParams } from "react-router-dom";
// import SectionTitle from '../SectionTitle/SectionTitle'
// import SSLcommerce from "./SSLcommerce";


// const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
// const Payment = () => {
//     const { packageName } = useParams();
//     const location = useLocation();
//     const { price } = location.state || {};

//     return (
//         <div>
//             <div>
//                 <SectionTitle heading="Payment" />
//             </div>
//             <div className="border-2 border-black  rounded-xl p-8">
//             <div className="text-center">
//                 <h1 className="text-xl md:text-2xl">Payment For <span className="uppercase">{packageName} </span>Badge</h1>
//             </div>
//             <div>
//                 <button className="btn">
//                     Payment via Stripe
//                 </button>
//                 <button className="btn">
//                     Payment via SSLCommerce
//                 </button>
//             </div>
//             <div className="mt-5">
//                 <Elements stripe={stripePromise}>
//                     <CheckoutForm price={price} packageName={packageName}></CheckoutForm>
//                 </Elements>
//             </div>
//             <div className="mt-5">
//                 <SSLcommerce/>
//             </div>
//             </div>
//         </div>
//     );
// };

// export default Payment;

import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useLocation, useParams } from "react-router-dom";
import SectionTitle from "../SectionTitle/SectionTitle";
import SSLcommerce from "./SSLcommerce";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
  const { packageName } = useParams();
  const location = useLocation();
  const { price } = location.state || {};
  
  // State to handle the selected payment method
  const [paymentMethod, setPaymentMethod] = useState(null);

  return (
    <div>
      <div>
        <SectionTitle heading="Payment" />
      </div>
      <div className="border-2 border-black rounded-xl p-8">
        <div className="text-center">
          <h1 className="text-xl md:text-2xl">
            Payment For <span className="uppercase">{packageName}</span> Badge
          </h1>
        </div>
        <div className="flex justify-center gap-4 mt-5">
          <button
            className={`btn ${paymentMethod === "stripe" ? "btn-active" : ""}`}
            onClick={() => setPaymentMethod("stripe")}
          >
            Payment via Stripe
          </button>
          <button
            className={`btn ${paymentMethod === "sslcommerce" ? "btn-active" : ""}`}
            onClick={() => setPaymentMethod("sslcommerce")}
          >
            Payment via SSLCommerce
          </button>
        </div>
        <div className="mt-5">
          {paymentMethod === "stripe" && (
            <Elements stripe={stripePromise}>
              <CheckoutForm price={price} packageName={packageName} />
            </Elements>
          )}
          {paymentMethod === "sslcommerce" && <SSLcommerce price={price} packageName={packageName} />}
          {!paymentMethod && (
            <div className="text-center text-gray-500">
              <p>Please select a payment method to proceed.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Payment;
