import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'jg-airport-autocomplete',
  template: `<input JgMapsAutocomplete type="text" class="form-control" placeholder="Location" name="Location">`
})
export class AirportAutocompleteComponent {

}
