/* tslint:disable: max-line-length */
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';

import {
  BrowserTransferStateModule
} from '../modules/transfer-state/browser-transfer-state.module';

import { AppComponent } from './app.component';
import { NotFound404Component } from './not-found404.component';
import { routes } from './app.routing';
import { StoreDevToolsModule } from './devtools/store-devtools.module';

import 'rxjs/add/operator/takeUntil';
import { JgAirportsModule } from './airports/index';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('App Component', () => {
  let fixture;
  let de: DebugElement;
  let getDebugElement;
  let cp;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserTransferStateModule,
        ReactiveFormsModule,
        RouterTestingModule.withRoutes(routes),
        StoreDevToolsModule,
        JgAirportsModule
        ],
      providers: [],
      declarations: [AppComponent, NotFound404Component]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);

    cp = fixture.componentInstance;
    de = fixture.debugElement;

    getDebugElement = (selector) => {
      return de.query(By.css(selector));
    };

    fixture.detectChanges();

  });

  it('should contain a router-outlet', () => {
    let routerOutlet = getDebugElement('router-outlet');
    expect(routerOutlet.nativeElement).toBeDefined();
  });

});
