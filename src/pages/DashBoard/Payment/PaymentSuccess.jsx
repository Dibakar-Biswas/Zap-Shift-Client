import React, { useEffect, useState } from "react";
import payBanner from "../../../assets/payment.png";
import { useSearchParams } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const [paymentInfo, setPaymentInfo] = useState({});
  const sessionId = searchParams.get("session_id");
  const axiosSecure = useAxiosSecure();

  console.log(sessionId);

  useEffect(() => {
    if (sessionId) {
      axiosSecure
        .patch(`/payment-success?session_id=${sessionId}`)
        .then((res) => {
          console.log(res.data);
          setPaymentInfo({
            transactionId: res.data.transactionId,
            trackingId: res.data.trackingId
          })
        });
    }
  }, [sessionId, axiosSecure]);

  return (
    <div>
      <img className="w-fit mx-auto p-4" src={payBanner} alt="" />
      <p className="text-4xl font-semibold mb-4">You Transaction Id : {paymentInfo.transactionId}</p>
      <p className="text-4xl font-semibold">Your Parcel Tracking Id : {paymentInfo.trackingId}</p>
    </div>
  );
};

export default PaymentSuccess;
