"use client";

import useFetchVehicleData from "@/hooks/useFetchVehicleData";
import React from "react";
import CustomSelect from "./shared/CustomSelect";
import SectionHeader from "./shared/SectionHeader";

const VehicleInfo = ({
  selectedType,
  setSelectedType,
  selectedVehicle,
  setSelectedVehicle,
}) => {
  const vehicleData = useFetchVehicleData();

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
              setSelectedVehicle(null);
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
            value={
              selectedVehicle
                ? `${selectedVehicle.year} ${selectedVehicle.make} ${selectedVehicle.model}`
                : ""
            }
            onChange={(e) => {
              const selected = filteredVehicles.find(
                (vehicle) =>
                  `${vehicle.year} ${vehicle.make} ${vehicle.model}` ===
                  e.target.value
              );
              setSelectedVehicle(selected);
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
