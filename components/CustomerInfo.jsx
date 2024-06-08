import React from "react";
import SectionHeader from "./shared/SectionHeader";

const CustomerInfo = ({ customerInfo, handleCustomerInfoChange }) => {
  return (
    <div>
      <SectionHeader title={"Customer Information"} />

      <form className="p-5 rounded border">
        <label className="font-light text-sm block">
          First Name<span className="text-red-500 text-base">*</span>
        </label>
        <input
          type="text"
          name="firstName"
          value={customerInfo.firstName}
          onChange={handleCustomerInfoChange}
          className="border rounded w-full mt-2 mb-5 p-2 text-sm text-[#828290]"
          required
        />

        <label className="font-light text-sm block">
          Last Name<span className="text-red-500 text-base">*</span>
        </label>
        <input
          type="text"
          name="lastName"
          value={customerInfo.lastName}
          onChange={handleCustomerInfoChange}
          className="border rounded w-full mt-2 mb-5 p-2 text-sm text-[#828290]"
          required
        />

        <label className="font-light text-sm block">
          Email<span className="text-red-500 text-base">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={customerInfo.email}
          onChange={handleCustomerInfoChange}
          className="border rounded w-full mt-2 mb-5 p-2 text-sm text-[#828290]"
          required
        />

        <label className="font-light text-sm block">
          Phone Number<span className="text-red-500 text-base">*</span>
        </label>
        <input
          type="tel"
          name="phone"
          value={customerInfo.phone}
          onChange={handleCustomerInfoChange}
          className="border rounded w-full mt-2 mb-5 p-2 text-sm text-[#828290]"
          required
        />
      </form>
    </div>
  );
};

export default CustomerInfo;
