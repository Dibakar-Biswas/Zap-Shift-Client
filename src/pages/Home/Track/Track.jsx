import React from "react";
import tracking from "../../../assets/live-tracking.png";
import safe from "../../../assets/safe-delivery.png";

const Track = () => {
  return (
    <div>
      <div className="flex items-center mb-6">
        <img src={tracking} alt="" />
        <div
        className="ml-14 self-stretch"
          style={{
            borderLeft: "2px dashed #999"
          }}
        ></div>
        <div className="ml-10">
            <p className="font-extrabold text-2xl mb-3">Live Parcel Tracking</p>
            <p className="font-medium">Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.</p>
        </div>
      </div>
      <div className="flex items-center mb-6">
        <img src={safe} alt="" />
        <div
        className="ml-14 self-stretch"
          style={{
            borderLeft: "2px dashed #999"
          }}
        ></div>
        <div className="ml-10">
            <p className="font-extrabold text-2xl mb-3">100% Safe Delivery</p>
            <p className="font-medium">We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.</p>
        </div>
      </div>
      <div className="flex items-center">
        <img src={safe} alt="" />
        <div
        className="ml-14 self-stretch"
          style={{
            borderLeft: "2px dashed #999"
          }}
        ></div>
        <div className="ml-10">
            <p className="font-extrabold text-2xl mb-3">24/7 Call Center Support</p>
            <p className="font-medium">Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.</p>
        </div>
      </div>
    </div>
  );
};

export default Track;
