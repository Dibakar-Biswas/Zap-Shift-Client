import React from "react";
import payBanner from "../../../assets/payment.jpg";

const PaymentSuccess = () => {
  return (
    <div>
      <img className="w-fit max-h-screen flex items-center justify-center" src={payBanner} alt="" />
    </div>
  );
};

export default PaymentSuccess;
