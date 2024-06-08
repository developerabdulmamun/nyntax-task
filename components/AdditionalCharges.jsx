"use client";

import React, { useState } from "react";
import SectionHeader from "./shared/SectionHeader";

const AdditionalCharges = ({ handleAdditionalChargesChange }) => {
  const [additionalCharges, setAdditionalCharges] = useState({
    collisionDamageWaiver: { checked: false, value: 9 },
    liabilityInsurance: { checked: false, value: 15 },
    rentalTax: { checked: false, value: 11.5 },
  });

  const handleCheckboxChange = (chargeName) => {
    setAdditionalCharges((prevCharges) => ({
      ...prevCharges,
      [chargeName]: {
        ...prevCharges[chargeName],
        checked: !prevCharges[chargeName].checked,
      },
    }));

    handleAdditionalChargesChange(additionalCharges);
  };

  return (
    <div>
      <SectionHeader title={"Additional Charges"} />

      <div className="p-5 rounded border">
        <label className="flex w-full text-sm mb-5">
          <input
            type="checkbox"
            checked={additionalCharges.collisionDamageWaiver.checked}
            onChange={() => handleCheckboxChange("collisionDamageWaiver")}
            className="mr-2"
          />
          <span className="flex-1">Collision Damage Waiver</span> $
          {additionalCharges.collisionDamageWaiver.value.toFixed(2)}
        </label>

        <label className="flex w-full text-sm mb-5">
          <input
            type="checkbox"
            checked={additionalCharges.liabilityInsurance.checked}
            onChange={() => handleCheckboxChange("liabilityInsurance")}
            className="mr-2"
          />
          <span className="flex-1">Liability Insurance</span> $
          {additionalCharges.liabilityInsurance.value.toFixed(2)}
        </label>

        <label className="flex w-full text-sm mb-5">
          <input
            type="checkbox"
            checked={additionalCharges.rentalTax.checked}
            onChange={() => handleCheckboxChange("rentalTax")}
            className="mr-2"
          />
          <span className="flex-1">Rental Tax</span>{" "}
          {additionalCharges.rentalTax.value}%
        </label>
      </div>
    </div>
  );
};

export default AdditionalCharges;
