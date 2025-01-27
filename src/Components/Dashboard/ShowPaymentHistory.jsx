import React from "react";

const ShowPaymentHistory = ({ pay }) => {
  return (
    <tr className="hover:bg-gray-100">
      {/* Name */}
      <td className="px-4 py-2 border">{pay.name}</td>
      {/* Date */}
      <td className="px-4 py-2 border">{pay.date}</td>
      {/* Amount */}
      <td className="px-4 py-2 border text-center">{pay.amount}$</td>
      {/* Transaction ID */}
      <td className="px-4 py-2 border">{pay.trxId}</td>
    </tr>
  );
};

export default ShowPaymentHistory;
