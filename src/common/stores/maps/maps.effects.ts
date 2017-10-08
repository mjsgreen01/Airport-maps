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
  fetchCurrentUserDetails$: Observable<Action> = this.actions$
    .ofType(mapsActions.ActionTypes.SET_START_PLACE)
    .map(toPayload)
    .withLatestFrom(this.store.select(appSelectors.getEndPlace))
    .filter(([startPlace, endPlace]) => !!endPlace)
    .switchMap(([start, end]) => this.mapsService.getDistanceBetweenPlaces(start, end)
      .mergeMap((res: any) => Observable.of(
        new mapsActions.SetDistanceBetweenPlaces(res)
      ))
    );


}
