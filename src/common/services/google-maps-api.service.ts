import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { WindowRef } from '../utils/window-ref';
import 'rxjs/add/observable/bindCallback';

@Injectable()
export class GoogleMapsApiService {
  private window;
  private distanceMatrixService;
  private directionsService;
  private placesService;

  constructor(windowRef: WindowRef) {
    this.window = windowRef.nativeWindow;
    this.distanceMatrixService =  new this.window.google.maps.DistanceMatrixService();
    this.directionsService = new this.window.google.maps.DirectionsService();
    this.placesService = new this.window.google.maps.places.PlacesService(document.body.appendChild(document.createElement('div')));
  }



  getDistance(start, end): Observable<string> {
    let boundFunction: any = Observable.bindCallback(this.distanceMatrixService.getDistanceMatrix);
    let apiArgs = {
      origins: [start.formatted_address],
      destinations: [end.formatted_address],
      travelMode: 'DRIVING',
      unitSystem: this.window.google.maps.UnitSystem.IMPERIAL
    };
    return boundFunction(apiArgs).map(([response, status]) => response.rows[0].elements[0].distance.text);
  }

  getDirections(start, end): Observable<string> {
    let boundFunction: any = Observable.bindCallback(this.directionsService.route);
    let apiArgs = {
      origin: start.formatted_address,
      destination: end.formatted_address,
      travelMode: 'DRIVING',
      unitSystem: this.window.google.maps.UnitSystem.IMPERIAL
    };
    return boundFunction(apiArgs).map(([response, status]) => response);
  }

  getSearchResults(text: string) {
    let boundFunction: any = Observable.bindCallback((query, cb) => this.placesService.textSearch(query, cb));
    let apiArgs = {
      query: text,
      type: 'airport'
    };
    return boundFunction(apiArgs).map(([response, status]) => {
      return response.filter(r => r.formatted_address.indexOf('United States') >= 0);
    });
  }


}
