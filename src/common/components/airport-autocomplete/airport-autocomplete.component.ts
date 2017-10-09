import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CompleterData, CompleterService } from 'ng2-completer';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'jg-airport-autocomplete',
  template: `
    <input [(ngModel)]="searchStr"
           (ngModelChange)="textChange($event)"
           type="text"
           class="form-control"
           placeholder="Location"
           name="Location">
    <ul>
      <li *ngFor="let option of options"
          (click)="placeChange(option)">
        {{option.name}}
      </li>
    </ul>
  `
})
export class AirportAutocompleteComponent {
  public dataService: CompleterData;
  public searchStr;
  public show = false;
  private _options = [];
  private oldValue;
  @Input()
  set options(val: Array<any>) {debugger;
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

  placeChange(place) {debugger;
    console.log(place);
    this.onPlaceChange.emit(place);
  }

  textChange(text) {debugger;
    if(this.oldValue !== text && text !== '') {
      this.onQueryChange.emit(text);
      this.oldValue = text;
    }
  }
}
