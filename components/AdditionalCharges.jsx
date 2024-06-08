"use client";

import React, { useState } from "react";
import SectionHeader from "./shared/SectionHeader";

const AdditionalCharges = () => {
  const [collisionDamageWaiverChecked, setCollisionDamageWaiverChecked] =
    useState(false);
  const [liabilityInsuranceChecked, setLiabilityInsuranceChecked] =
    useState(false);
  const [rentalTaxChecked, setRentalTaxChecked] = useState(false);

  const handleCollisionDamageWaiverChange = () => {
    setCollisionDamageWaiverChecked(!collisionDamageWaiverChecked);
  };

  const handleLiabilityInsuranceChange = () => {
    setLiabilityInsuranceChecked(!liabilityInsuranceChecked);
  };

  const handleRentalTaxChange = () => {
    setRentalTaxChecked(!rentalTaxChecked);
  };

  return (
    <div>
      <SectionHeader title={"Additional Charges"} />

      <div className="p-5 rounded border">
        <label className="flex w-full text-sm mb-5">
          <input
            type="checkbox"
            checked={collisionDamageWaiverChecked}
            onChange={handleCollisionDamageWaiverChange}
            className="mr-2"
          />
          <span className="flex-1">Collision Damage Waiver</span> $9.00
        </label>

        <label className="flex w-full text-sm mb-5">
          <input
            type="checkbox"
            checked={liabilityInsuranceChecked}
            onChange={handleLiabilityInsuranceChange}
            className="mr-2"
          />
          <span className="flex-1">Liability Insurance</span> $15.00
        </label>

        <label className="flex w-full text-sm">
          <input
            type="checkbox"
            checked={rentalTaxChecked}
            onChange={handleRentalTaxChange}
            className="mr-2"
          />
          <span className="flex-1">Rental Tax</span> 11.5%
        </label>
      </div>
    </div>
  );
};

export default AdditionalCharges;
