"use client";

import React, { useEffect, useRef, useState } from "react";
import AdditionalCharges from "@/components/AdditionalCharges";
import ChargesSummary from "@/components/ChargesSummary";
import CustomerInfo from "@/components/CustomerInfo";
import ReservationDetails from "@/components/ReservationDetails";
import VehicleInfo from "@/components/VehicleInfo";
import Invoice from "./Invoice";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const ReservationForm = () => {
  const [pickupDate, setPickupDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [duration, setDuration] = useState("");
  const [reservationId, setReservationId] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [additionalCharges, setAdditionalCharges] = useState(null);
  const [discount, setDiscount] = useState(0);
  const [customerInfo, setCustomerInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    generateReservationId();
  }, []);

  const generateReservationId = () => {
    const id = "#RES-" + Math.floor(Math.random() * 1000000);
    setReservationId(id);
  };

  const handleAdditionalChargesChange = (charges) => {
    setAdditionalCharges(charges);
  };

  const handleCustomerInfoChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const getFullName = () => {
    return `${customerInfo.firstName} ${customerInfo.lastName}`;
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="container">
      <div className="sticky top-0 bg-white z-10 py-3 md:py-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="font-bold text-2xl">Reservation</h1>
          <button
            onClick={handlePrint}
            className="bg-blue-600 px-6 py-3 rounded text-white font-semibold text-sm hover:bg-blue-800"
          >
            Print / Download
          </button>
        </div>
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
            setDiscount={setDiscount}
            reservationId={reservationId}
          />
          <VehicleInfo
            selectedType={selectedType}
            setSelectedType={setSelectedType}
            selectedVehicle={selectedVehicle}
            setSelectedVehicle={setSelectedVehicle}
          />
        </div>

        <div className="col-span-4 lg:col-span-3 space-y-6">
          <CustomerInfo
            fullName={getFullName()}
            customerInfo={customerInfo}
            handleCustomerInfoChange={handleCustomerInfoChange}
          />
          <AdditionalCharges
            handleAdditionalChargesChange={handleAdditionalChargesChange}
          />
        </div>

        <div className="col-span-4 space-y-6">
          <ChargesSummary
            duration={duration}
            selectedVehicle={selectedVehicle}
            additionalCharges={additionalCharges}
            discount={discount}
          />

          <Invoice
            customerInfo={customerInfo}
            duration={duration}
            selectedVehicle={selectedVehicle}
            additionalCharges={additionalCharges}
            discount={discount}
            reservationId={reservationId}
          />
        </div>
      </div>
    </div>
  );
};

export default ReservationForm;
