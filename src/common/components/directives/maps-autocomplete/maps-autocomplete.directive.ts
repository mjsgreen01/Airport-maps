import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';
import { NgModel } from '@angular/forms';
import { WindowRef } from 'common/utils/window-ref';

@Directive({
  selector: '[JgMapsAutocomplete]',
  providers: [NgModel],
  host: {
    '(input)': 'onInputChange()'
  }
})
export class MapsAutocompleteDirective {
  private window;
  modelValue: any;
  autocomplete: any;
  private _el: HTMLElement;

  @Output() onPlaceChange: EventEmitter<any> = new EventEmitter();


  constructor(el: ElementRef,
              private model: NgModel,
              windowRef: WindowRef) {
    this.window = windowRef.nativeWindow;
    this._el = el.nativeElement;
    this.modelValue = this.model;
  }

  ngAfterViewInit() {
    let input = this._el;
    let options = {
      componentRestrictions: {country: 'us'}
    };

    this.autocomplete = new this.window.google.maps.places.Autocomplete(input, options);
    this.window.google.maps.event.addListener(this.autocomplete, 'place_changed', () => {
      let place = this.autocomplete.getPlace();
      this.placeChange(place);

    });
  }

  placeChange(place: Object) {
    this.onPlaceChange.emit(place);
  }

  onInputChange() {
    console.log(this.model);
  }
}
