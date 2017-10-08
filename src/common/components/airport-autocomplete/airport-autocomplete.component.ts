import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'jg-airport-autocomplete',
  template: `
    <input JgMapsAutocomplete
           (onPlaceChange)="placeChange($event)"
           type="text"
           class="form-control"
           placeholder="Location"
           name="Location">
  `
})
export class AirportAutocompleteComponent {

  @Output() onPlaceChange: EventEmitter<any> = new EventEmitter();

  placeChange(place) {
    console.log(place);
    this.onPlaceChange.emit(place);
  }
}
