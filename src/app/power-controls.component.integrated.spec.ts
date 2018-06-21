import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'

import { PowerControlsComponent } from './power-controls.component'
import { PowerControlComponent } from './power-control.component'
import { PowerLocationsService } from './power-locations.service'
import { PowerLocation } from '../shared/power-location.model';

describe('PowerControlsComponent', () => {
  let component: PowerControlsComponent;
  let fixture: ComponentFixture<PowerControlsComponent>;

  beforeEach(async(() => {
    const mockPowerLocationsService = {
      loctions: [{}]
    }
    TestBed.configureTestingModule({
      declarations: [ PowerControlsComponent, PowerControlComponent ],
      providers: [ { provide: PowerLocationsService, useValue: mockPowerLocationsService }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct number of PowerLocations', async(() => {
    const locations = [{
      name: 'first',
      heatingNodeName: 'hello'
    },
    {
      name: 'second',
      heatingNodeName: 'hello'
    }]
    const powerControls = fixture.componentInstance
    powerControls.powerLocations = locations
    fixture.detectChanges();
    const compiled = fixture.debugElement.queryAll(By.directive(PowerControlComponent))
    expect(compiled.length).toEqual(2)
  }))
})
