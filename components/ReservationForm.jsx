"use client";

import AdditionalCharges from "@/components/AdditionalCharges";
import ChargesSummary from "@/components/ChargesSummary";
import CustomerInfo from "@/components/CustomerInfo";
import ReservationDetails from "@/components/ReservationDetails";
import VehicleInfo from "@/components/VehicleInfo";
import { useState } from "react";

const ReservationForm = () => {
  const [pickupDate, setPickupDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [duration, setDuration] = useState("");

  const [selectedType, setSelectedType] = useState("");
  const [selectedVehicle, setSelectedVehicle] = useState("");

  return (
    <div>
      <div className="container mt-3 md:mt-6 lg:mt-12 mb-3 md:mb-6 lg:mb-12">
        <div className="flex justify-between items-center mb-6">
          <h1 className="font-bold text-2xl">Reservation</h1>
          <button className="bg-blue-600 px-6 py-3 rounded text-white font-semibold text-sm hover:bg-blue-800">
            Print / Download
          </button>
        </div>

        <div className="grid grid-cols-3 lg:grid-cols-10 gap-6">
          <div className="col-span-4 lg:col-span-3 space-y-6">
            <ReservationDetails
              pickupDate={pickupDate}
              setPickupDate={setPickupDate}
              returnDate={returnDate}
              setReturnDate={setReturnDate}
              duration={duration}
              setDuration={setDuration}
            />
            <VehicleInfo
              selectedType={selectedType}
              setSelectedType={setSelectedType}
              selectedVehicle={selectedVehicle}
              setSelectedVehicle={setSelectedVehicle}
            />
          </div>

          <div className="col-span-4 lg:col-span-3 space-y-6">
            <CustomerInfo />
            <AdditionalCharges />
          </div>

          <div className="col-span-4 lg:col-span-4">
            <ChargesSummary
              duration={duration}
              selectedVehicle={selectedVehicle}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationForm;
