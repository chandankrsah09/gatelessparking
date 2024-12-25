export type LatLng = {
    lat: number;
    lng: number;
}

export type ListSpotPropsType = {
    onNext: () => void,
    onPrev: () => void,
}

export type Price = {
    hourly: number
}

export enum ParkingLocationStatus {
    AVAILABLE = 'AVAILABLE',
    UNAVAILABLE = 'UNAVAILABLE',
    FULL = 'FULL',
}

export type UpdateLocationParams = {
    address: string,
    NumberOfSpots: number,
    price: {
        hourly: number
    }
}

export enum MapAddressType {
    PARKINGLOCATION = 'PARKINGLOCATION',
    DESTINATION = 'DESTINATION',
    ADMIN = 'ADMIN',
}

export type MapParams = {
    id: string,
    gpscoords: LatLng,
    address: string,
    numberofspots?: number,
    bookedspots?: number,
    price?: Price,
    type?: string,
    status?: string,
    radius?: number,
}

