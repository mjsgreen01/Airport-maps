
import * as MapsSelectors from 'common/stores/maps/maps.selectors';
import { AppState } from '../index';
import { createSelector } from 'reselect';

export const getMapsState = (state: AppState) => state.maps;

export const getStartPlace = createSelector(getMapsState, MapsSelectors.getStartPlace);

export const getEndPlace = createSelector(getMapsState, MapsSelectors.getEndPlace);

export const getDistanceBetweenPlaces = createSelector(getMapsState, MapsSelectors.getDistanceBetweenPlaces);

export const getDirectionsBetweenPlaces = createSelector(getMapsState, MapsSelectors.getDirectionsBetweenPlaces);

export const getEndSearchResults = createSelector(getMapsState, MapsSelectors.getEndSearchResults);

export const getStartSearchResults = createSelector(getMapsState, MapsSelectors.getStartSearchResults);

export const getStartSearchTerm = createSelector(getMapsState, MapsSelectors.getStartSearchTerm);

export const getEndSearchTerm = createSelector(getMapsState, MapsSelectors.getEndSearchTerm);
