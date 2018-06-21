import { Injectable } from '@angular/core';
import { PowerLocation } from '../shared/power-location.model';
import { Observable, of } from 'rxjs';

@Injectable()
export class PowerLocationsService {
  locations: PowerLocation[] = powerLocations
  constructor() { }

  getLocations(): Observable<PowerLocation[]> {
    return of(powerLocations)
  }

}


const powerLocations = [
  {
    name: 'First',
    heatingNodeName: 'hello' },
  {
    name: 'Second',
    heatingNodeName: 'hello'
  }, {
    name: 'Third',
    heatingNodeName: 'hello'
  }]
