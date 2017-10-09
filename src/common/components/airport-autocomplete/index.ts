import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AirportAutocompleteComponent } from './airport-autocomplete.component';
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
    FormsModule
  ]
})
export class JgAirportAutocompleteModule {}
