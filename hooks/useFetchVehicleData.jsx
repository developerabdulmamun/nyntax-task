"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useFetchVehicleData = () => {
  const { data: vehicleData } = useQuery({
    queryKey: ["vehicleData"],
    queryFn: async () => {
      const res = await axios.get(
        "https://exam-server-7c41747804bf.herokuapp.com/carsList"
      );
      return res.data.data;
    },
  });

  return vehicleData;
};

export default useFetchVehicleData;
