import * as MapsActions from './maps.actions';
import { initialMapsState, mapsReducer } from './maps.reducer';

describe('Reducer: Maps', () => {
  let state, nextState;
  beforeEach(() => {
    state = initialMapsState;
  });

  describe('Default State', () => {
    it('should return the current state', () => {
      nextState = mapsReducer(state, {
        type: 'FOO',
        payload: {}
      });
      expect(nextState).toEqual(initialMapsState);
    });
  });

  describe('SetStartPlaceAction action', () => {
    it('should set start_place and start_search_term when action dispatched', () => {
      let place = {name: 'sunnyvale'};
      expect(state.start_place).toEqual({});
      nextState = mapsReducer(state, {
        type: MapsActions.SetStartPlaceAction.type,
        payload: place
      });
      expect(nextState.start_place).toEqual(place);
      expect(nextState.start_search_term).toEqual(place.name);
    });
  });

  describe('SetEndtPlaceAction action', () => {
    it('should set end_place and end_search_term when action dispatched', () => {
      let place = {name: 'sunnyvale'};
      expect(state.end_place).toEqual({});
      nextState = mapsReducer(state, {
        type: MapsActions.SetEndPlaceAction.type,
        payload: place
      });
      expect(nextState.end_place).toEqual(place);
      expect(nextState.end_search_term).toEqual(place.name);
    });
  });




});
