import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {DebugElement, CUSTOM_ELEMENTS_SCHEMA, Directive, Input} from "@angular/core";
import { By } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { AirportAutocompleteComponent } from './airport-autocomplete.component';
import { FormsModule } from '@angular/forms';

describe('Component: AirportAutocompleteComponent', () => {
  let cp: AirportAutocompleteComponent;
  let fixture: ComponentFixture<AirportAutocompleteComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AirportAutocompleteComponent],
      imports: [CommonModule, FormsModule],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirportAutocompleteComponent);
    cp = fixture.componentInstance;
    de = fixture.debugElement;
  });

  it('should hide the results when showResults is false', () => {
    cp.showResults = false;
    fixture.detectChanges();
    let selected = de.queryAll(By.css('.airport-autocomplete__results'));
    expect(selected.length).toEqual(0);
  });

  it('should show the results when showResults is true', () => {
    cp.showResults = true;
    fixture.detectChanges();
    let selected = de.queryAll(By.css('.airport-autocomplete__results'));
    expect(selected.length).toEqual(1);
  });

  it('#placeChange should emit onPlaceChange', (done) => {
    cp.onPlaceChange.subscribe((place) => {
      expect(place).toEqual('test');
      done();
    });
    cp.placeChange('test');
  });


});
