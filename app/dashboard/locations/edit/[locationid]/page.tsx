import { ParkingLocationModel } from "@/schemas/parking-locations";
import LocationEditForm from "./location-edit-form";

async function LocationEditPage({
  params,
}: {
  params: { locationid: string };
}) {
  const location = await ParkingLocationModel.findById(params.locationid);
  return (
    <LocationEditForm location={JSON.stringify(location)} />
  )
}

export default LocationEditPage;
