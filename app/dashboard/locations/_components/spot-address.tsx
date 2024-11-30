import AddressAutoCompleteInput from "@/components/ui/address-autocomplete.input";
import { useMySpotStore } from "@/store";
import { LatLng, ListSpotPropsType } from "@/types";
import React, { useState } from "react";

function SpotAddress({ onNext }: ListSpotPropsType) {
  const mySpotStore = useMySpotStore();
  const [message, setMessage] = useState<string>("");

  function onSubmit() {
    if (mySpotStore.data.address) {
      onNext();
    } else {
      setMessage("Address is required");
    }
  }

  const handleAddressSelect = (addreses: string, gpscoords: LatLng) => {
    mySpotStore.updateState({
        address: addreses,
        gpscoords: gpscoords
    })
  }
  return (
    <div className="grid w-full gap-1 5">
      <h2 className="text-xl sm:text-2xl py-4 font-semibold">Address</h2>
      <AddressAutoCompleteInput onAddressSelect={handleAddressSelect} selectedAddress={mySpotStore.data.address}/>
    </div>
  );
}

export default SpotAddress;
