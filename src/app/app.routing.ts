/* tslint:disable: max-line-length */
import { Routes } from '@angular/router';

import { NotFound404Component } from './not-found404.component';
import { AirportsContainer } from './airports/airports.container';

export const routes: Routes = [
  { path: '', component: AirportsContainer, pathMatch: 'full' },
  { path: '**', component: NotFound404Component }
];
