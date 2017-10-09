import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AirportAutocompleteComponent } from './airport-autocomplete.component';
import { JgMapsAutocompleteModule } from 'common/components/directives/maps-autocomplete/index';
import { Ng2CompleterModule } from 'ng2-completer';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AirportAutocompleteComponent
  ],
  exports: [
    AirportAutocompleteComponent
  ],
  imports: [
    CommonModule,
    JgMapsAutocompleteModule,
    Ng2CompleterModule,
    FormsModule
  ]
})
export class JgAirportAutocompleteModule {}
