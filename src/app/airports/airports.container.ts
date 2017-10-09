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
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AirportsContainer {

  public distanceBetweenPlaces$: Observable<string>;
  public directionsBetweenPlaces$: Observable<Object>;
  public startSearchResults$: Observable<Array<any>>;
  public endSearchResults$: Observable<Array<any>>;
  public startSearchTerm$: Observable<string>;
  public endSearchTerm$: Observable<string>;

  constructor(private store: Store<AppState>) {
    this.distanceBetweenPlaces$ = this.store.select(appSelectors.getDistanceBetweenPlaces);
    this.directionsBetweenPlaces$ = this.store.select(appSelectors.getDirectionsBetweenPlaces);
    this.startSearchResults$ = this.store.select(appSelectors.getStartSearchResults);
    this.endSearchResults$ = this.store.select(appSelectors.getEndSearchResults);
    this.startSearchTerm$ = this.store.select(appSelectors.getStartSearchTerm);
    this.endSearchTerm$ = this.store.select(appSelectors.getEndSearchTerm);
  }

  startPlaceChange(place) {
    this.store.dispatch(new mapsActions.SetStartPlaceAction(place));
  }

  endPlaceChange(place) {
    this.store.dispatch(new mapsActions.SetEndPlaceAction(place));
  }

  startQueryChange(query) {
    this.store.dispatch(new mapsActions.SetStartSearchTerm(query));
  }

  endQueryChange(query) {
    this.store.dispatch(new mapsActions.SetEndSearchTerm(query));
  }
}
