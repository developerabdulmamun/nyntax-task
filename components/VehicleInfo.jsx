"use client";

import useFetchVehicleData from "@/hooks/useFetchVehicleData";
import React, { useState } from "react";
import CustomSelect from "./shared/CustomSelect";
import SectionHeader from "./shared/SectionHeader";

const VehicleInfo = ({
  selectedType,
  setSelectedType,
  selectedVehicle,
  setSelectedVehicle,
}) => {
  const vehicleData = useFetchVehicleData();

  const [selectedMakeModel, setSelectedMakeModel] = useState("");

  const vehicleTypes = [
    ...new Set(vehicleData?.map((vehicle) => vehicle.type)),
  ];

  const filteredVehicles = vehicleData?.filter(
    (vehicle) => vehicle.type === selectedType
  );

  const handleVehicleSelect = (e) => {
    const selectedValue = e.target.value;
    const selected = filteredVehicles.find(
      (vehicle) =>
        `${vehicle.year} ${vehicle.make} ${vehicle.model}` === selectedValue
    );
    setSelectedVehicle(selected);
    setSelectedMakeModel(selectedValue);
  };

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
              setSelectedVehicle(null);
              setSelectedMakeModel("");
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
            value={selectedMakeModel}
            onChange={handleVehicleSelect}
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
