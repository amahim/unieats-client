import React, { useContext } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosSecure from "../Hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import ShowPaymentHistory from "./ShowPaymentHistory";

const PaymentHistory = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const res = await axiosSecure.get("/payments");
      return res.data;
    },
  });

  const myPaymentHistory = payments.filter((p) => p.email === user.email) || [];

  return (
    <div>
      <SectionTitle heading="Payment History" />
      <div className="mt-4">
        {myPaymentHistory.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse border border-gray-300">
              {/* Table Head */}
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 border text-left">Name</th>
                  <th className="px-4 py-2 border text-left">Date</th>
                  <th className="px-4 py-2 border text-center">Amount</th>
                  <th className="px-4 py-2 border text-left">Transaction ID</th>
                </tr>
              </thead>
              {/* Table Body */}
              <tbody>
                {myPaymentHistory.map((pay) => (
                  <ShowPaymentHistory pay={pay} key={pay._id} />
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <h2 className="text-center text-error text-xl md:text-2xl">
            You have no payment history
          </h2>
        )}
      </div>
    </div>
  );
};

export default PaymentHistory;
