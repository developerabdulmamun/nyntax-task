import React from "react";
import SectionHeader from "./shared/SectionHeader";

const ChargesSummary = ({
  duration,
  selectedVehicle,
  additionalCharges,
  discount,
}) => {
  if (!selectedVehicle) {
    return (
      <div>
        <SectionHeader title={"Charges Summary"} />
        <div>No vehicle selected.</div>
      </div>
    );
  }

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

  let totalChargeBeforeDiscount =
    weeklyCharge +
    dailyCharge +
    hourlyCharge +
    additionalChargesTotal +
    rentalTaxAmount;

  let discountAmount = 0;
  if (discount) {
    discountAmount = (totalChargeBeforeDiscount * discount) / 100;
  }

  const totalCharge = totalChargeBeforeDiscount - discountAmount;

  return (
    <div>
      <SectionHeader title={"Charges Summary"} />

      <div className="bg-blue-100 border border-blue-600 rounded py-5 px-[10px]">
        <table className="w-full table-auto ">
          <thead>
            <tr className="text-left border-b border-blue-500">
              <th className="py-2 px-4 font-semibold text-sm">Charge</th>
              <th className="py-2 px-4 font-semibold text-sm text-center">
                Unit
              </th>
              <th className="py-2 px-4 font-semibold text-sm text-end">Rate</th>
              <th className="py-2 px-4 font-semibold text-sm text-end">
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4">Weekly</td>
              <td className="py-2 px-4 text-center">{weeks}</td>
              <td className="py-2 px-4 text-end">${weekly}</td>
              <td className="py-2 px-4 text-end">${weeklyCharge}</td>
            </tr>
            <tr>
              <td className="py-2 px-4">Daily</td>
              <td className="py-2 px-4 text-center">{days}</td>
              <td className="py-2 px-4 text-end">${daily}</td>
              <td className="py-2 px-4 text-end">${dailyCharge}</td>
            </tr>
            <tr>
              <td className="py-2 px-4">Hourly</td>
              <td className="py-2 px-4 text-center">{hours}</td>
              <td className="py-2 px-4 text-end">${hourly}</td>
              <td className="py-2 px-4 text-end">${hourlyCharge}</td>
            </tr>

            {additionalCharges && (
              <tr>
                <td className="py-2 px-4">Additional Charges</td>
                <td></td>
                <td></td>
                <td className="py-2 px-4 text-end">
                  ${additionalChargesTotal}
                </td>
              </tr>
            )}

            {rentalTaxAmount > 0 && (
              <tr>
                <td className="py-2 px-4">Rental Tax</td>
                <td></td>
                <td></td>
                <td className="py-2 px-4 text-end">
                  ${rentalTaxAmount.toFixed(2)}
                </td>
              </tr>
            )}

            {discountAmount > 0 && (
              <tr>
                <td className="py-2 px-4">Discount</td>
                <td></td>
                <td></td>
                <td className="py-2 px-4 text-end">
                  -${discountAmount.toFixed(2)}
                </td>
              </tr>
            )}

            <tr className="font-semibold">
              <td className="pt-4 px-4 text-start">Total</td>
              <td></td>
              <td></td>
              <td className="pt-4 px-4 text-end">${totalCharge.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ChargesSummary;
