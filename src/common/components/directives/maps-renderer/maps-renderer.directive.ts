import { Directive, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { NgModel } from '@angular/forms';
import { WindowRef } from 'common/utils/window-ref';

@Directive({
  selector: '[JgMapsRenderer]',
  providers: [NgModel]
})
export class MapsRendererDirective {
  private window;
  private directionsDisplay: any;
  private _el: HTMLElement;

  @Input()
  set routes(route: Object) {
    if (!!route && !!this.directionsDisplay) {
      this.directionsDisplay.setDirections(route);
    }
  };


  constructor(el: ElementRef,
              private model: NgModel,
              windowRef: WindowRef) {
    this.window = windowRef.nativeWindow;
    this._el = el.nativeElement;
  }

  ngAfterViewInit() {
    let input = this._el;
    this.directionsDisplay = new this.window.google.maps.DirectionsRenderer();
    let options = {
      center: {lat: 38.730610, lng: -96.935242},
      zoom: 3
    };
    let map = new this.window.google.maps.Map(input, options);

    this.directionsDisplay.setMap(map);
  }
}
