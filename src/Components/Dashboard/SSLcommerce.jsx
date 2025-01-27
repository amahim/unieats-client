import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";

const SSLcommerce = ({price,packageName}) => {
    const {user} = useContext(AuthContext)

    const handlePayment = async () =>{
        
        const payment ={
            email: user?.email,
            name:user?.displayName,
            amount: price,
            membership: packageName,
            trxId: "",
            date: moment().format("LL"),
            status: "pending",
        }

        const response = await axios.post("https://y-eta-roan.vercel.app/create-ssl-payment",payment )

        if (response.data?.gatewayUrl) {
            // Redirect to the SSLCommerz payment page
            window.location.replace(response.data.gatewayUrl);
          } else {
            toast.error("Gateway URL not received:", response.data);
          }
      
    }

  return (
    <div className="flex justify-center gap-2 flex-col">
      <label className="input input-bordered flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
          <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
        </svg>
        <input type="email" className="grow" placeholder="Email" value={user?.email} />
      </label>
      <button onClick={()=> handlePayment()} className=" btn bg-[#2c2c2c] rounded-lg border-none text-white ">Confirm</button>
    </div>
  );
};

export default SSLcommerce;
