import { Component, Inject, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppState } from 'common/stores/index';

@Component({
  selector: 'airports',
  templateUrl: './airports.container.html',
  // styleUrls: ['./airports.scss'],
  providers: [],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AirportsContainer {

  constructor(private store: Store<AppState>) {


  }
}
