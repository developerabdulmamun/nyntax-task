import React from "react";
import SectionHeader from "./shared/SectionHeader";

const ChargesSummary = ({ duration, selectedVehicle, additionalCharges }) => {
  if (!selectedVehicle) {
    return <div>Please select a vehicle.</div>;
  }

  console.log(duration);

  const { hourly, daily, weekly } = selectedVehicle?.rates;

  const parsedDuration = duration.split(" ");
  const weeks = parseInt(parsedDuration[0], 10) || 0;
  const days = parseInt(parsedDuration[2], 10) || 0;
  const hours = parseInt(parsedDuration[4], 10) || 0;

  const weeklyCharge = weekly * weeks;
  const dailyCharge = daily * days;
  const hourlyCharge = hourly * hours;

  let additionalChargesTotal = 0;
  if (additionalCharges) {
    Object.values(additionalCharges).forEach((charge) => {
      if (charge.checked && charge !== additionalCharges.rentalTax) {
        additionalChargesTotal += charge.value;
      }
    });
  }

  let rentalTaxAmount = 0;
  if (
    additionalCharges &&
    additionalCharges.rentalTax &&
    additionalCharges.rentalTax.checked
  ) {
    const rentalTaxPercentage = additionalCharges.rentalTax.value || 0;

    const totalChargeExcludingRentalTax =
      weeklyCharge + dailyCharge + hourlyCharge + additionalChargesTotal;

    rentalTaxAmount =
      (totalChargeExcludingRentalTax * rentalTaxPercentage) / 100;
  }

  const totalCharge =
    weeklyCharge +
    dailyCharge +
    hourlyCharge +
    additionalChargesTotal +
    rentalTaxAmount;

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
              <td className="py-2 px-4">Weekly</td>
              <td className="py-2 px-4">{weeks}</td>
              <td className="py-2 px-4">${weekly}</td>
              <td className="py-2 px-4">${weeklyCharge}</td>
            </tr>
            <tr>
              <td className="py-2 px-4">Daily</td>
              <td className="py-2 px-4">{days}</td>
              <td className="py-2 px-4">${daily}</td>
              <td className="py-2 px-4">${dailyCharge}</td>
            </tr>
            <tr>
              <td className="py-2 px-4">Hourly</td>
              <td className="py-2 px-4">{hours}</td>
              <td className="py-2 px-4">${hourly}</td>
              <td className="py-2 px-4">${hourlyCharge}</td>
            </tr>

            {additionalCharges && (
              <tr>
                <td className="py-2 px-4">Additional Charges</td>
                <td></td>
                <td></td>
                <td className="py-2 px-4">${additionalChargesTotal}</td>
              </tr>
            )}

            {rentalTaxAmount > 0 && (
              <tr>
                <td className="py-2 px-4">Rental Tax</td>
                <td></td>
                <td></td>
                <td className="py-2 px-4">${rentalTaxAmount.toFixed(2)}</td>
              </tr>
            )}

            <tr className="font-semibold">
              <td className="pt-4 px-4 text-start">Total</td>
              <td className="pt-4 px-4 text-start"></td>
              <td className="pt-4 px-4 text-start"></td>
              <td className="pt-4 px-4">${totalCharge.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ChargesSummary;
