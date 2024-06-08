import React, { useRef } from "react";
import ChargesSummary from "./ChargesSummary";

const Invoice = ({
  customerInfo,
  selectedVehicle,
  duration,
  additionalCharges,
  discount,
  reservationId,
}) => {
  const invoiceRef = useRef();

  return (
    <div>
      <div
        ref={invoiceRef}
        className="max-w-4xl mx-auto bg-white p-6 border rounded shadow"
      >
        <div className="flex justify-between items-center border-b pb-4 mb-4">
          <div>
            <h1 className="text-2xl font-bold">CH Car Place Inc</h1>
            <p className="mt-1">162 Bergen St, Brooklyn, NY 11213</p>
          </div>
          <div className="text-right">
            <h2 className="text-xl font-semibold">Reservation</h2>
            <p className="mt-1">{reservationId}</p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold border-b pb-2">RENTER INFO</h3>
          <p className="mt-2">
            {customerInfo.firstName} {customerInfo.lastName}
          </p>
          <p className="mt-1">{customerInfo.email}</p>
          <p className="mt-1">{customerInfo.phone}</p>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold border-b pb-2">CAR DETAILS</h3>
          <p className="mt-1">Company: {selectedVehicle?.make}</p>
          <p className="mt-1">Model: {selectedVehicle?.model}</p>
          <p className="mt-1">Year: {selectedVehicle?.year}</p>
        </div>

        <ChargesSummary
          duration={duration}
          selectedVehicle={selectedVehicle}
          additionalCharges={additionalCharges}
          discount={discount}
        />
        <p className="mt-4">Duration: {duration}</p>
      </div>
    </div>
  );
};

export default Invoice;
