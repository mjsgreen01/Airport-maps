import * as mapsActions from './maps.actions';

export interface MapsState {
  start_place: Object;
  end_place: Object;
};

export const initialMapsState: MapsState = {
  start_place: {},
  end_place: {},
};


export function mapsReducer(state = initialMapsState, action: mapsActions.Actions): MapsState {
  switch (action.type) {

    case mapsActions.SetStartPlaceAction.type: {
      return Object.assign({}, state, {
        start_place: action.payload
      });
    }

    case mapsActions.SetEndPlaceAction.type: {
      return Object.assign({}, state, {
        end_place: action.payload
      });
    }

    default: {
      return state;
    }
  }
}
