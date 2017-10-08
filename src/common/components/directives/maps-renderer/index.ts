import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapsRendererDirective } from './maps-renderer.directive';

@NgModule({
  declarations: [
    MapsRendererDirective
  ],
  exports: [
    MapsRendererDirective
  ],
  imports: [
    CommonModule
  ]
})
export class JgMapsRendererModule {}
