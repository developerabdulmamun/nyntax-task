"use client";

import useFetchVehicleData from "@/hooks/useFetchVehicleData";
import React, { useState } from "react";
import CustomSelect from "./shared/CustomSelect";
import SectionHeader from "./shared/SectionHeader";

const VehicleInfo = () => {
  const vehicleData = useFetchVehicleData();

  const [selectedType, setSelectedType] = useState("");
  const [selectedVehicle, setSelectedVehicle] = useState("");

  const vehicleTypes = [
    ...new Set(vehicleData?.map((vehicle) => vehicle.type)),
  ];

  const filteredVehicles = vehicleData?.filter(
    (vehicle) => vehicle.type === selectedType
  );

  return (
    <div>
      <SectionHeader title={"Vehicle Information"} />

      <form className="p-5 rounded border">
        <div className="mb-5 relative">
          <label
            className="block text-sm font-light mb-2"
            htmlFor="vehicleType"
          >
            Vehicle Type<span className="text-red-500">*</span>
          </label>
          <CustomSelect
            value={selectedType}
            onChange={(e) => {
              setSelectedType(e.target.value);
              setSelectedVehicle("");
            }}
            options={vehicleTypes}
            placeholder="Select a type"
          />
        </div>

        <div className="relative">
          <label className="block text-sm font-light mb-2" htmlFor="vehicle">
            Vehicle Type<span className="text-red-500">*</span>
          </label>
          <CustomSelect
            value={selectedVehicle}
            onChange={(e) => {
              setSelectedVehicle(e.target.value);
            }}
            options={filteredVehicles?.map(
              (vehicle) => `${vehicle.year} ${vehicle.make} ${vehicle.model}`
            )}
            placeholder="Select a vehicle"
          />
        </div>
      </form>
    </div>
  );
};

export default VehicleInfo;
