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
