import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { WindowRef } from '../utils/window-ref';
import 'rxjs/add/observable/bindCallback';

@Injectable()
export class GoogleMapsApiService {
  private window;
  private distanceMatrixService;

  constructor(windowRef: WindowRef) {
    this.window = windowRef.nativeWindow;
    this.distanceMatrixService =  new this.window.google.maps.DistanceMatrixService();
  }



  getDistance(start, end): Observable<string> {
    let boundFunction: any = Observable.bindCallback(this.distanceMatrixService.getDistanceMatrix);
    let apiArgs = {
      origins: [start.formatted_address],
      destinations: [end.formatted_address],
      travelMode: 'DRIVING',
      unitSystem: this.window.google.maps.UnitSystem.IMPERIAL
    };
    // this.distanceMatrixService.getDistanceMatrix(apiArgs, (res, stat) => {debugger});
    return boundFunction(apiArgs).map(([response, status]) => response.rows[0].elements[0].distance.text);
  }
}
