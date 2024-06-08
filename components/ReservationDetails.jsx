import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { FaCalendarAlt } from "react-icons/fa";

const ReservationDetails = () => {
  const [pickupDate, setPickupDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [duration, setDuration] = useState("");

  // Calculate Duration
  const calculateDuration = (startDate, endDate) => {
    if (!startDate || !endDate) {
      return "";
    }

    let diffInMs = endDate - startDate;

    const diffInWeeks = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 7));
    diffInMs -= diffInWeeks * (1000 * 60 * 60 * 24 * 7);

    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    const formatUnit = (value, unit) => {
      return `${value} ${unit}${value !== 1 ? "s" : ""}`;
    };

    if (diffInWeeks === 0 && diffInDays === 1) {
      return formatUnit(diffInDays, "Day");
    } else if (diffInWeeks === 0) {
      return formatUnit(diffInDays, "Days");
    } else if (diffInWeeks === 1 && diffInDays === 0) {
      return formatUnit(diffInWeeks, "Week");
    } else if (diffInWeeks === 1 && diffInDays === 1) {
      return `${diffInWeeks} Week ${diffInDays} Day`;
    } else if (diffInWeeks === 1) {
      return `${diffInWeeks} Week ${formatUnit(diffInDays, "Day")}`;
    } else if (diffInDays === 0) {
      return formatUnit(diffInWeeks, "Week");
    } else {
      return `${formatUnit(diffInWeeks, "Week")} ${formatUnit(
        diffInDays,
        "Day"
      )}`;
    }
  };

  useEffect(() => {
    setDuration(calculateDuration(pickupDate, returnDate));
  }, [pickupDate, returnDate]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="font-semibold text-lg mb-6 w-full border-b-2 border-blue-500">
            Reservation Details
          </h1>

          <form className="p-5 rounded border">
            <label className="font-light text-sm">Reservation ID</label>
            <input
              type="text"
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
                className="border rounded w-full p-2 text-sm text-[#]"
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
                className="border rounded w-full p-2 text-sm text-[#]"
                placeholderText="Select Date and Time"
                wrapperClassName="w-full"
                minDate={pickupDate}
              />

              <FaCalendarAlt className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-sm text-[#828290]" />
            </div>

            <div className="flex justify-between items-center">
              <label className="font-light text-sm text-[#828290]">
                Duration
              </label>
              <input
                type="text"
                value={duration}
                readOnly
                className="border rounded w-3/4 mt-2 mb-5 p-2 text-sm text-[#828290]"
              />
            </div>

            <label className="font-light text-sm">Discount</label>
            <input
              type="text"
              className="border rounded w-full mt-2 p-2 text-sm text-[#828290]"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReservationDetails;
