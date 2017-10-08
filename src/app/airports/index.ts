import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JgAirportAutocompleteModule } from 'common/components/airport-autocomplete/index';

import { AirportsContainer } from './airports.container';
import { JgMapsRendererModule } from '../../common/components/directives/maps-renderer/index';

@NgModule({
  declarations: [
    AirportsContainer
  ],
  imports: [
    CommonModule,
    JgAirportAutocompleteModule,
    JgMapsRendererModule
  ]
})
export class JgAirportsModule {}
