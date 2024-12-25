import { connectToDB } from "@/lib/db";
import {
  ParkingLocation,
  ParkingLocationModel,
} from "@/schemas/parking-locations";
import { MapAddressType, MapParams, ParkingLocationStatus } from "@/types";
import React from "react";
import Map from "@/components/map";

async function LocationsMapViewPage() {
  await connectToDB();

  const ParkingLocation: ParkingLocation[] = await ParkingLocationModel.find(
    {}
  );

  const params: MapParams[] = ParkingLocation.filter(
    (loc) => loc.status === ParkingLocationStatus.AVAILABLE
  ).map((loc) => ({
    address: loc.address,
    gpscoords: loc.gpscoords,
    price: loc.price,
    numberofspots: loc.numberofspots,
    status: loc.status as string,
    type: MapAddressType.ADMIN,
    id: loc.id,
  }));

  return (
    <div className="p-2">
      <Map mapParams={JSON.stringify(params)} />
    </div>
  );
}

export default LocationsMapViewPage;
