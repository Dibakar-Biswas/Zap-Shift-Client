import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";

const Works = () => {
  return (
    <div className="max-w-6xl mx-auto mt-24">
      <h2 className="font-extrabold text-3xl mb-5">How it works</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <div className="p-5 bg-blue-50 rounded-2xl">
          <CiDeliveryTruck className="h-14 w-14"></CiDeliveryTruck>
          <h2 className="font-bold text-2xl">Booking Pick & Drop</h2>
          <p className="font-medium">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
        <div className="p-5 bg-blue-50 rounded-2xl">
          <CiDeliveryTruck className="h-14 w-14"></CiDeliveryTruck>
          <h2 className="font-bold text-2xl">Cash On Delivery</h2>
          <p className="font-medium">
            From personal packages to business shipments — we deliver on time, every time.
          </p>
        </div>
        <div className="p-5 bg-blue-50 rounded-2xl">
          <CiDeliveryTruck className="h-14 w-14"></CiDeliveryTruck>
          <h2 className="font-bold text-2xl">Delivery Hub</h2>
          <p className="font-medium">
            From personal packages to business shipments — we deliver on time, every time.
          </p>
        </div>
        <div className="p-5 bg-blue-50 rounded-2xl">
          <CiDeliveryTruck className="h-14 w-14"></CiDeliveryTruck>
          <h2 className="font-bold text-2xl">Booking SME & Corporate</h2>
          <p className="font-medium">
            From personal packages to business shipments — we deliver on time, every time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Works;
