import { connectToDB } from "@/lib/db";
import {
  ParkingLocation,
  ParkingLocationModel,
} from "@/schemas/parking-locations";
import React from "react";
import LocationCard from "./_components/location-card";
import { getStreetFromAddress } from "@/lib/utils";

async function LocationsTileViewPage() {
  await connectToDB();

  const location: ParkingLocation[] = (await ParkingLocationModel.find({})) as [
    ParkingLocation
  ];

  console.log(location);

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-2 p-2">
      {location.map((location) => (
        <LocationCard
          key={location.id}
          id={location.id}
          name={getStreetFromAddress(location.address)}
          address={location.address}
          numberOfSpots={location.numberofspots}
          spotsBooked={0}
          spotsAvailable={0}
          status={""}
          price={{
            hourly: 0,
          }}
        />
      ))}
    </div>
  );
}

export default LocationsTileViewPage;
