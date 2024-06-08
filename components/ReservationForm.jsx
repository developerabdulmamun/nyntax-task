"use client";

import AdditionalCharges from "@/components/AdditionalCharges";
import ChargesSummary from "@/components/ChargesSummary";
import CustomerInfo from "@/components/CustomerInfo";
import ReservationDetails from "@/components/ReservationDetails";
import VehicleInfo from "@/components/VehicleInfo";
import { useEffect, useRef, useState } from "react";
import Invoice from "./Invoice";
import { useReactToPrint } from "react-to-print";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

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
  const [showInvoice, setShowInvoice] = useState(false);
  const invoiceRef = useRef();

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

  const handlePrintOrDownload = () => {
    const input = invoiceRef.current;

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const imgWidth = 208;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("invoice.pdf");
    });
  };

  return (
    <div>
      <div className="container mt-3 md:mt-6 lg:mt-12 mb-3 md:mb-6 lg:mb-12">
        <div className="flex justify-between items-center mb-6">
          <h1 className="font-bold text-2xl">Reservation</h1>
          <button
            onClick={handlePrintOrDownload}
            className="bg-blue-600 px-6 py-3 rounded text-white font-semibold text-sm hover:bg-blue-800"
          >
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
              ref={invoiceRef}
              fullName={getFullName()}
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
    </div>
  );
};

export default ReservationForm;
