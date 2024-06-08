"use client";

import "react-datepicker/dist/react-datepicker.css";
import ReservationDetails from "./ReservationDetails";

const ReservationForm = () => {
  return (
    <div className="container mt-3 md:mt-6 lg:mt-12">
      <div className="flex justify-between items-center mb-6">
        <h1 className="font-bold text-2xl">Reservation</h1>
        <button className="bg-blue-600 px-6 py-3 rounded text-white font-semibold text-sm hover:bg-blue-800">
          Print / Download
        </button>
      </div>

      <ReservationDetails />
    </div>
  );
};

export default ReservationForm;
