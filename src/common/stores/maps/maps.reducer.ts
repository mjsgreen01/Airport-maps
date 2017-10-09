import * as mapsActions from './maps.actions';

export interface MapsState {
  start_place: any;
  end_place: any;
  distance_between: string;
  directions_between: any;
  start_search_results: Array<any>;
  end_search_results: Array<any>;
  start_search_term: string;
  end_search_term: string;
};

export const initialMapsState: MapsState = {
  start_place: {},
  end_place: {},
  distance_between: '',
  directions_between: {},
  start_search_results: [],
  end_search_results: [],
  start_search_term: '',
  end_search_term: ''
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

    case mapsActions.SetStartSearchResults.type: {
      return Object.assign({}, state, {
        start_search_results: action.payload
      });
    }

    case mapsActions.SetEndSearchResults.type: {
      return Object.assign({}, state, {
        end_search_results: action.payload
      });
    }

    case mapsActions.SetStartSearchTerm.type: {
      return Object.assign({}, state, {
        start_search_term: action.payload
      });
    }

    case mapsActions.SetEndSearchTerm.type: {
      return Object.assign({}, state, {
        end_search_term: action.payload
      });
    }

    default: {
      return state;
    }
  }
}
