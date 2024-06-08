import CustomerInfo from "@/components/CustomerInfo";
import ReservationDetails from "@/components/ReservationDetails";
import VehicleInfo from "@/components/VehicleInfo";

export default function Home() {
  return (
    <main>
      <div className="container mt-3 md:mt-6 lg:mt-12">
        <div className="flex justify-between items-center mb-6">
          <h1 className="font-bold text-2xl">Reservation</h1>
          <button className="bg-blue-600 px-6 py-3 rounded text-white font-semibold text-sm hover:bg-blue-800">
            Print / Download
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="flex flex-col gap-6">
            <ReservationDetails />
            <VehicleInfo />
          </div>

          <div className="flex flex-col gap-6">
            <CustomerInfo />
          </div>
        </div>
      </div>
    </main>
  );
}
