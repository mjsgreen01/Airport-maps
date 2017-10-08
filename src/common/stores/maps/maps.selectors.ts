import { MapsState } from './maps.reducer';




export const getStartPlace = (state: MapsState) => state.start_place;

export const getEndPlace = (state: MapsState) => state.end_place;

export const getDistanceBetweenPlaces = (state: MapsState) => state.distance_between;

export const getDirectionsBetweenPlaces = (state: MapsState) => state.directions_between;
