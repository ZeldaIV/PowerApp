import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerControlComponent } from './power-control.component';
import { By } from '@angular/platform-browser';
import { PowerLocation } from '../shared/power-location.model';
import { PowerLocationsService } from './power-locations.service';

describe('PowerControlComponent', () => {
  let component: PowerControlComponent;
  let fixture: ComponentFixture<PowerControlComponent>;

  beforeEach(async(() => {
    const mockPowerLocationsService = {
      locations: [{}]
    }
    TestBed.configureTestingModule({
      declarations: [ PowerControlComponent ],
      providers: [ { provide: PowerLocationsService, useValue: mockPowerLocationsService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a name field pr heater-cable', async(() => {
    fixture.componentInstance.powerLocation = { name: 'test', heatingNodeName: 'hello'}
    fixture.detectChanges()
    const compiled = fixture.debugElement.nativeElement.querySelector('p')
    expect(compiled.textContent).toEqual('hello')
  }))

  it('should have a group for a heatingNode', async(() => {
    fixture.componentInstance.powerLocation = { name: 'test', heatingNodeName: 'hello'}
    fixture.detectChanges()
    const buttonGroup = fixture.debugElement.queryAll(By.css('.btn-group'))
    expect(buttonGroup.length).toEqual(1)
  }))
});
