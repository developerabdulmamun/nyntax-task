import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const Invoice = ({
  customerInfo,
  selectedVehicle,
  chargesSummary,
  additionalDrivers,
  duration,
}) => {
  const invoiceRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => invoiceRef.current,
  });

  return (
    <div>
      <div
        ref={invoiceRef}
        className="max-w-4xl mx-auto bg-white p-6 border rounded shadow"
      >
        <div className="flex justify-between items-center border-b pb-4 mb-4">
          <div>
            <h1 className="text-2xl font-bold">CH Car Place Inc</h1>
            <p className="mt-1">162 Bergen St, Brooklyn, NY 11213</p>
          </div>
          <div className="text-right">
            <h2 className="text-xl font-semibold">Reservation</h2>
            <p className="mt-1">RA #0121</p>
            <p className="mt-1">REPAIR ORDER:</p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold border-b pb-2">RENTER INFO</h3>
          <p className="mt-2">
            {customerInfo.firstName} {customerInfo.lastName}
          </p>
          <p className="mt-1">{customerInfo.email}</p>
          <p className="mt-1">{customerInfo.phone}</p>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold border-b pb-2">UNIT DETAILS</h3>
          <p className="mt-1">Make: {selectedVehicle?.make}</p>
          <p className="mt-1">Model: {selectedVehicle?.model}</p>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold border-b pb-2">CHARGE SUMMARY</h3>
          <p className="mt-4">Duration: {duration}</p>
          {/* <table className="w-full mt-4 border-collapse">
            <thead>
              <tr>
                <th className="border p-2 text-left">Item</th>
                <th className="border p-2 text-left">Unit Price</th>
                <th className="border p-2 text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              {chargesSummary?.map((charge, index) => (
                <tr key={index}>
                  <td className="border p-2">{charge.item}</td>
                  <td className="border p-2">{charge.unitPrice}</td>
                  <td className="border p-2 text-right">
                    {charge.amount.toFixed(2)}
                  </td>
                </tr>
              ))}
              <tr>
                <td className="border p-2 font-semibold">
                  Total Estimated Charges
                </td>
                <td className="border p-2"></td>
                <td className="border p-2 text-right font-semibold">
                  {chargesSummary
                    ?.reduce((acc, charge) => acc + charge.amount, 0)
                    .toFixed(2)}
                </td>
              </tr>
            </tbody>
          </table> */}
        </div>

        <div className="mb-6">
          <h3 className="font-semibold border-b pb-2">
            ADDITIONAL AUTHORIZED DRIVER(S)
          </h3>
          {additionalDrivers.map((driver, index) => (
            <p key={index} className="mt-2">
              {driver}
            </p>
          ))}
        </div>
      </div>

      <button
        onClick={handlePrint}
        className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-800"
      >
        Print / Download
      </button>
    </div>
  );
};

export default Invoice;
