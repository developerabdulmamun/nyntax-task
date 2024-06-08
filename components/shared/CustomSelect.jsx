import React from "react";
import { FaChevronDown } from "react-icons/fa";

const CustomSelect = ({ value, onChange, options, placeholder }) => {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={onChange}
        className="block appearance-none w-full bg-white border p-2 rounded focus:outline-none focus:shadow-outline pr-10"
        style={{ fontWeight: "normal", fontSize: "14px", color: "#828290" }}
      >
        <option value="">{placeholder}</option>
        {options?.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div
        className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
        style={{ fontWeight: "normal", fontSize: "14px", color: "#828290" }}
      >
        <FaChevronDown />
      </div>
    </div>
  );
};

export default CustomSelect;
