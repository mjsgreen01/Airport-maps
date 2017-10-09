/* tslint:disable: member-ordering */
import { Injectable } from '@angular/core';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as mapsActions from './maps.actions';
import 'rxjs/add/operator/withLatestFrom';
import { AppState } from '../index';
import * as appSelectors from 'common/stores/app';
import { MapsService } from './maps.service';

@Injectable()
export class MapsEffects {
  constructor(
    private actions$: Actions,
    private mapsService: MapsService,
    private store: Store<AppState>,
  ) { }

  @Effect()
  fetchDistanceBetweenPlacesStart$: Observable<Action> = this.actions$
    .ofType(mapsActions.ActionTypes.SET_START_PLACE)
    .map(toPayload)
    .withLatestFrom(this.store.select(appSelectors.getEndPlace))
    .filter(([startPlace, endPlace]) => !!endPlace.id)
    .mergeMap(([start, end]) => this.mapsService.getDistanceBetweenPlaces(start, end)
      .mergeMap((res: any) => Observable.of(
        new mapsActions.SetDistanceBetweenPlaces(res)
      ))
    );

  @Effect()
  fetchDirectionsBetweenPlacesStart$: Observable<Action> = this.actions$
    .ofType(mapsActions.ActionTypes.SET_START_PLACE)
    .map(toPayload)
    .withLatestFrom(this.store.select(appSelectors.getEndPlace))
    .filter(([startPlace, endPlace]) => !!endPlace.id)
    .mergeMap(([start, end]) => this.mapsService.getDirectionsBetweenPlaces(start, end)
      .mergeMap((res: any) => Observable.of(
        new mapsActions.SetDirectionsBetweenPlaces(res)
      ))
    );

  @Effect()
  fetchDistanceBetweenPlacesEnd$: Observable<Action> = this.actions$
    .ofType(mapsActions.ActionTypes.SET_END_PLACE)
    .map(toPayload)
    .withLatestFrom(this.store.select(appSelectors.getStartPlace))
    .filter(([endPlace, startPlace]) => !!startPlace.id)
    .mergeMap(([end, start]) => this.mapsService.getDistanceBetweenPlaces(start, end)
      .mergeMap((res: any) => Observable.of(
        new mapsActions.SetDistanceBetweenPlaces(res)
      ))
    );

  @Effect()
  fetchDirectionsBetweenPlacesEnd$: Observable<Action> = this.actions$
    .ofType(mapsActions.ActionTypes.SET_END_PLACE)
    .map(toPayload)
    .withLatestFrom(this.store.select(appSelectors.getStartPlace))
    .filter(([endPlace, startPlace]) => !!startPlace.id)
    .mergeMap(([end, start]) => this.mapsService.getDirectionsBetweenPlaces(start, end)
      .mergeMap((res: any) => Observable.of(
        new mapsActions.SetDirectionsBetweenPlaces(res)
      ))
    );

  @Effect()
  fetchStartSearchResults$: Observable<Action> = this.actions$
    .ofType(mapsActions.ActionTypes.SET_START_SEARCH_TERM)
    .map(toPayload)
    .mergeMap((payload) => this.mapsService.getSearchResults(payload)
      .mergeMap((res: any) => Observable.of(
        new mapsActions.SetStartSearchResults(res)
      ))
    );

  @Effect()
  fetchEndSearchResults$: Observable<Action> = this.actions$
    .ofType(mapsActions.ActionTypes.SET_END_SEARCH_TERM)
    .map(toPayload)
    .mergeMap((payload) => this.mapsService.getSearchResults(payload)
      .mergeMap((res: any) => Observable.of(
        new mapsActions.SetEndSearchResults(res)
      ))
    );


}
