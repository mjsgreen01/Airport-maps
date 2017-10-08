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
};

export class SetStartPlaceAction implements Action {
  static type: string = ActionTypes.SET_START_PLACE;
  public type: string = SetStartPlaceAction.type;
  constructor(public payload: Object) {  }
}

export class SetEndPlaceAction implements Action {
  static type: string = ActionTypes.SET_END_PLACE;
  public type: string = SetEndPlaceAction.type;
  constructor(public payload: Object) {  }
}



export type Actions
  = SetStartPlaceAction
  | SetEndPlaceAction
  ;
