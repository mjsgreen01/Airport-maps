import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AirportAutocompleteComponent } from './airport-autocomplete.component';
import { JgMapsAutocompleteModule } from 'common/components/directives/maps-autocomplete/index';

@NgModule({
  declarations: [
    AirportAutocompleteComponent
  ],
  exports: [
    AirportAutocompleteComponent
  ],
  imports: [
    CommonModule,
    JgMapsAutocompleteModule
  ]
})
export class JgAirportAutocompleteModule {}
