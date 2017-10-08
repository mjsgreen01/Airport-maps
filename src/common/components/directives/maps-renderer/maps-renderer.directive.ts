import { Directive, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { NgModel } from '@angular/forms';
import { WindowRef } from 'common/utils/window-ref';

@Directive({
  selector: '[JgMapsRenderer]',
  providers: [NgModel]
})
export class MapsRendererDirective {
  private window;
  // modelValue: any;
  // autocomplete: any;
  directionsDisplay: any;
  private _el: HTMLElement;

  @Input()
  set routes(route: Object) {
    if (!!route && !!this.directionsDisplay) {
      this.directionsDisplay.setDirections(route);
    }
  };

  // @Output() onPlaceChange: EventEmitter<any> = new EventEmitter();


  constructor(el: ElementRef,
              private model: NgModel,
              windowRef: WindowRef) {
    this.window = windowRef.nativeWindow;
    this._el = el.nativeElement;
    // this.modelValue = this.model;
  }

  ngAfterViewInit() {
    let input = this._el;
    this.directionsDisplay = new this.window.google.maps.DirectionsRenderer();
    let options = {
      componentRestrictions: {country: 'us'}
    };
    let map = new this.window.google.maps.Map(input, {});

    this.directionsDisplay.setMap(map);

    // this.window.google.maps.event.addListener(this.autocomplete, 'place_changed', () => {
    //   let place = this.autocomplete.getPlace();
    //   this.placeChange(place);
    //
    // });
  }

  // placeChange(place: Object) {
  //   this.onPlaceChange.emit(place);
  // }
  //
  // onInputChange() {
  //   console.log(this.model);
  // }
}
