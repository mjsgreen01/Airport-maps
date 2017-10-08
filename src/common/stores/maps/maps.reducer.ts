import * as mapsActions from './maps.actions';

export interface MapsState {
  start_place: Object;
  end_place: Object;
  distance_between: string;
  directions_between: Object;
};

export const initialMapsState: MapsState = {
  start_place: {},
  end_place: {},
  distance_between: '',
  directions_between: {}
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

    case mapsActions.SetDistanceBetweenPlaces.type: {
      return Object.assign({}, state, {
        distance_between: action.payload
      });
    }

    case mapsActions.SetDirectionsBetweenPlaces.type: {
      return Object.assign({}, state, {
        directions_between: action.payload
      });
    }

    default: {
      return state;
    }
  }
}
