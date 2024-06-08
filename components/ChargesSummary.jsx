import React from "react";
import SectionHeader from "./shared/SectionHeader";

const ChargesSummary = () => {
  return (
    <div>
      <SectionHeader title={"Charges Summary"} />

      <div className="bg-blue-100 border border-blue-600 rounded py-5 px-2">
        <table className="w-full table-auto ">
          <thead>
            <tr className="text-left border-b border-blue-500">
              <th className="py-2 px-4 font-semibold text-sm">Charge</th>
              <th className="py-2 px-4 font-semibold text-sm">Unit</th>
              <th className="py-2 px-4 font-semibold text-sm">Rate</th>
              <th className="py-2 px-4 font-semibold text-sm">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4">Daily</td>
              <td className="py-2 px-4">1</td>
              <td className="py-2 px-4">$99.00</td>
              <td className="py-2 px-4">$99.00</td>
            </tr>
            <tr>
              <td className="py-2 px-4">Daily</td>
              <td className="py-2 px-4">1</td>
              <td className="py-2 px-4">$99.00</td>
              <td className="py-2 px-4">$99.00</td>
            </tr>
            <tr>
              <td className="py-2 px-4">Daily</td>
              <td className="py-2 px-4">1</td>
              <td className="py-2 px-4">$99.00</td>
              <td className="py-2 px-4">$99.00</td>
            </tr>
            <tr className="font-semibold">
              <td className="pt-4 px-4 text-start">Total</td>
              <td className="pt-4 px-4 text-start"></td>
              <td className="pt-4 px-4 text-start"></td>
              <td className="pt-4 px-4">$498.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ChargesSummary;
