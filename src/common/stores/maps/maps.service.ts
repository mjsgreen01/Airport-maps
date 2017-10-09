import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { GoogleMapsApiService } from 'common/services/google-maps-api.service';

@Injectable()
export class MapsService {
  constructor(
              public googleMapsApiService: GoogleMapsApiService) {
  }

  getDistanceBetweenPlaces(start, end): Observable<Object> {
    return this.googleMapsApiService.getDistance(start, end);
  }

  getDirectionsBetweenPlaces(start, end): Observable<Object> {
    return this.googleMapsApiService.getDirections(start, end);
  }

  getSearchResults(text: string): Observable<Object> {
    return this.googleMapsApiService.getSearchResults(text);
  }
}
