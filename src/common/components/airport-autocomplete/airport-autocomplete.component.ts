import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'jg-airport-autocomplete',
  styleUrls: ['./airport-autocomplete.component.scss'],
  template: `
    <div class="airport-autocomplete">
      <input [(ngModel)]="searchTerm"
             (ngModelChange)="textChange($event)"
             (blur)="onBlur()"
             type="text"
             class="airport-autocomplete__input form-control"
             placeholder="Airport"
             name="Airport">
      <div *ngIf="showResults"
           class="airport-autocomplete__results">
        <div *ngFor="let option of options"
            (mousedown)="placeChange(option)"
             class="airport-autocomplete__result">
          {{option.name}}
        </div>
      </div>
    </div>
  `
})
export class AirportAutocompleteComponent {
  public showResults = false;
  private _options = [];
  private oldValue;
  @Input()
  set options(val: Array<any>) {
    this.showResults = true;
    this._options = val;
  }
  get options(): Array<any> {
    return this._options;
  }

  @Input() searchTerm: string = '';

  @Output() onPlaceChange: EventEmitter<any> = new EventEmitter();

  @Output() onQueryChange: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  placeChange(place) {
    this.onPlaceChange.emit(place);
  }

  textChange(text) {
    if(this.oldValue !== text && text !== '') {
      this.onQueryChange.emit(text);
      this.oldValue = text;
    }
  }

  onBlur() {
    this.showResults = false;
  }
}
