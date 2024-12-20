import { ParkingLocationModel } from "@/schemas/parking-locations";
import React from "react";

async function LocationEditPage({
  params,
}: {
  params: { locationid: string };
}) {
  const location = await ParkingLocationModel.findById(params.locationid);
  return <div>edit {location.address}</div>;
}

export default LocationEditPage;
