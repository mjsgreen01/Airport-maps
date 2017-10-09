import { Action } from '@ngrx/store';
import { type } from 'common/stores/utils';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 *
 * The 'type' utility function coerces strings into string
 * literal types and runs a simple check to guarantee all
 * action types in the application are unique.
 */
export const ActionTypes = {
  SET_START_PLACE: type('[Maps] Set Start Place'),
  SET_END_PLACE: type('[Maps] Set End Place'),
  SET_DISTANCE_BETWEEN_PLACES: type('[Maps] Set Distance Between Places'),
  SET_DIRECTIONS_BETWEEN_PLACES: type('[Maps] Set Directions Between Places'),
  SET_START_SEARCH_TERM: type('[Maps] Set Start Place Search Term'),
  SET_END_SEARCH_TERM: type('[Maps] Set End Place Search Term'),
  SET_START_SEARCH_RESULTS: type('[Maps] Set Start Place Search Results'),
  SET_END_SEARCH_RESULTS: type('[Maps] Set End Place Search Results'),
};

export class SetStartPlaceAction implements Action {
  static type: string = ActionTypes.SET_START_PLACE;
  public type: string = SetStartPlaceAction.type;
  constructor(public payload: any) {  }
}

export class SetEndPlaceAction implements Action {
  static type: string = ActionTypes.SET_END_PLACE;
  public type: string = SetEndPlaceAction.type;
  constructor(public payload: any) {  }
}

export class SetDistanceBetweenPlaces implements Action {
  static type: string = ActionTypes.SET_DISTANCE_BETWEEN_PLACES;
  public type: string = SetDistanceBetweenPlaces.type;
  constructor(public payload: any) {  }
}

export class SetDirectionsBetweenPlaces implements Action {
  static type: string = ActionTypes.SET_DIRECTIONS_BETWEEN_PLACES;
  public type: string = SetDirectionsBetweenPlaces.type;
  constructor(public payload: any) {  }
}

export class SetStartSearchTerm implements Action {
  static type: string = ActionTypes.SET_START_SEARCH_TERM;
  public type: string = SetStartSearchTerm.type;
  constructor(public payload: any) {  }
}

export class SetEndSearchTerm implements Action {
  static type: string = ActionTypes.SET_END_SEARCH_TERM;
  public type: string = SetEndSearchTerm.type;
  constructor(public payload: any) {  }
}

export class SetStartSearchResults implements Action {
  static type: string = ActionTypes.SET_START_SEARCH_RESULTS;
  public type: string = SetStartSearchResults.type;
  constructor(public payload: any) {  }
}

export class SetEndSearchResults implements Action {
  static type: string = ActionTypes.SET_END_SEARCH_RESULTS;
  public type: string = SetEndSearchResults.type;
  constructor(public payload: any) {  }
}

export type Actions
  = SetStartPlaceAction
  | SetEndPlaceAction
  | SetDistanceBetweenPlaces
  | SetDirectionsBetweenPlaces
  | SetStartSearchTerm
  | SetEndSearchTerm
  | SetStartSearchResults
  | SetEndSearchResults
  ;
