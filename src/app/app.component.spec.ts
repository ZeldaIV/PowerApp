import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { PowerControlsComponent } from './power-controls.component';
import { PowerControlComponent } from './power-control.component'
import { PowerLocationsService } from './power-locations.service'
import { PowerLocation } from '../shared/power-location.model';

describe('AppComponent', () => {

  beforeEach(async(() => {
    let mockPowerLocationsService = {
      locations: [{}]
    }
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PowerControlsComponent,
        PowerControlComponent
      ],
      providers: [{ provide: PowerLocationsService, useValue: mockPowerLocationsService }]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Power control'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Power control');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Power control');
  }));

  it('should ONLY display powercontrols when logged in', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.componentInstance.isAuthenticated = true;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('iframe')).toBeFalsy();
    expect(compiled.querySelector('app-power-controls')).toBeTruthy();
  }));

  it('should ONLY display iframe if not logged in', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.componentInstance.isAuthenticated = false;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('iframe')).toBeTruthy();
    expect(compiled.querySelector('app-power-controls')).toBeFalsy();
  }));
});
