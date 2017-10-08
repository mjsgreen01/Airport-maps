import { Component, Inject, AfterViewInit, ChangeDetectionStrategy, Output } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppState } from 'common/stores/index';
import * as mapsActions from 'common/stores/maps/maps.actions';

@Component({
  selector: 'airports',
  templateUrl: './airports.container.html',
  // styleUrls: ['./airports.scss'],
  providers: [],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AirportsContainer {


  constructor(private store: Store<AppState>) {}

  startPlaceChange(place) {
    this.store.dispatch(new mapsActions.SetStartPlaceAction(place));
  }

  endPlaceChange(place) {
    this.store.dispatch(new mapsActions.SetEndPlaceAction(place));
  }
}
