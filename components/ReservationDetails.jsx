"use client";

import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { FaCalendarAlt } from "react-icons/fa";

import "react-datepicker/dist/react-datepicker.css";
import SectionHeader from "./shared/SectionHeader";

const ReservationDetails = ({
  pickupDate,
  setPickupDate,
  returnDate,
  setReturnDate,
  duration,
  setDuration,
  setDiscount,
  reservationId,
}) => {
  const [discountValue, setDiscountValue] = useState("");

  // Calculate Duration
  const calculateDuration = (startDate, endDate) => {
    if (!startDate || !endDate) {
      return "";
    }

    let diffInMs = endDate - startDate;

    const diffInWeeks = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 7));
    diffInMs -= diffInWeeks * (1000 * 60 * 60 * 24 * 7);

    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    diffInMs -= diffInDays * (1000 * 60 * 60 * 24);

    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));

    const formatUnit = (value, unit) => {
      return `${value} ${unit}${value !== 1 ? "s" : ""}`;
    };

    let durationStr = "";

    if (diffInWeeks > 0) {
      durationStr += formatUnit(diffInWeeks, "Week");
    }

    if (diffInDays > 0) {
      if (durationStr) durationStr += " ";
      durationStr += formatUnit(diffInDays, "Day");
    }

    if (diffInHours > 0) {
      if (durationStr) durationStr += " ";
      durationStr += formatUnit(diffInHours, "Hour");
    }

    return durationStr;
  };

  useEffect(() => {
    setDuration(calculateDuration(pickupDate, returnDate));
  }, [setDuration, pickupDate, returnDate]);

  useEffect(() => {
    setDiscount(discountValue);
  }, [setDiscount, discountValue]);

  return (
    <div>
      <SectionHeader title={"Reservation Details"} />

      <form className="p-5 rounded border">
        <label className="font-light text-sm">Reservation ID</label>
        <input
          type="text"
          value={reservationId}
          className="border rounded w-full mt-2 mb-5 p-2 text-sm text-[#828290]"
        />

        <label className="font-light text-sm block">
          Pickup Date<span className="text-red-500 text-base">*</span>
        </label>
        <div className="relative mt-2 mb-5">
          <DatePicker
            selected={pickupDate}
            onChange={(date) => setPickupDate(date)}
            showTimeSelect
            dateFormat="Pp"
            className="border rounded w-full p-2 text-sm text-[#828290]"
            placeholderText="Select Date and Time"
            wrapperClassName="w-full"
            minDate={new Date()}
          />

          <FaCalendarAlt className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-sm text-[#828290]" />
        </div>

        <label className="font-light text-sm block">
          Return Date<span className="text-red-500 text-base">*</span>
        </label>
        <div className="relative mt-2 mb-5">
          <DatePicker
            selected={returnDate}
            onChange={(date) => setReturnDate(date)}
            showTimeSelect
            dateFormat="Pp"
            className="border rounded w-full p-2 text-sm text-[#828290]"
            placeholderText="Select Date and Time"
            wrapperClassName="w-full"
            minDate={pickupDate}
          />

          <FaCalendarAlt className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-sm text-[#828290]" />
        </div>

        <div className="flex justify-between items-center my-5 ">
          <label className="font-light text-sm">Duration</label>
          <input
            type="text"
            value={duration}
            readOnly
            className="border rounded w-3/4 p-2 text-sm text-[#828290]"
          />
        </div>

        <label className="font-light text-sm">Discount (%)</label>
        <input
          type="number"
          className="border rounded w-full mt-2 p-2 text-sm text-[#828290]"
          value={discountValue}
          onChange={(e) => setDiscountValue(e.target.value)}
        />
      </form>
    </div>
  );
};

export default ReservationDetails;
