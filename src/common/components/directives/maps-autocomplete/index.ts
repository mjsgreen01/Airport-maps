import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapsAutocompleteDirective } from './maps-autocomplete.directive';

@NgModule({
  declarations: [
    MapsAutocompleteDirective
  ],
  exports: [
    MapsAutocompleteDirective
  ],
  imports: [
    CommonModule
  ]
})
export class JgMapsAutocompleteModule {}
