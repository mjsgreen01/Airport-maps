import { Component, Inject, AfterViewInit, ChangeDetectionStrategy, Output } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppState } from 'common/stores/index';
import * as mapsActions from 'common/stores/maps/maps.actions';
import * as appSelectors from 'common/stores/app';

@Component({
  selector: 'airports',
  templateUrl: './airports.container.html',
  styleUrls: ['./airports.scss'],
  providers: [],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AirportsContainer {

  public distanceBetweenPlaces$: Observable<string>;
  public directionsBetweenPlaces$: Observable<Object>;

  constructor(private store: Store<AppState>) {
    this.distanceBetweenPlaces$ = this.store.select(appSelectors.getDistanceBetweenPlaces);
    this.directionsBetweenPlaces$ = this.store.select(appSelectors.getDirectionsBetweenPlaces);
  }

  startPlaceChange(place) {
    this.store.dispatch(new mapsActions.SetStartPlaceAction(place));
  }

  endPlaceChange(place) {
    this.store.dispatch(new mapsActions.SetEndPlaceAction(place));
  }
}
