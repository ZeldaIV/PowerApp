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
    heatingNodeName: 'Upper',
    nodes: [
      {
        name: 'The first node in upper'
      },
      {
        name: 'The second node in upper'
      },
      {
        name: 'The third node in upper'
      }
    ],
  }
  {
    name: 'Second',
    heatingNodeName: 'Middle',
    nodes: [
      {
        name: 'The first node in middle'
      },
      {
        name: 'The second node in upper'
      },
      {
        name: 'The third node in upper'
      }
    ]
  }, {
    name: 'Third',
    heatingNodeName: 'Below',
    nodes: [
      {
        name: 'The first node in below'
      },
      {
        name: 'The second node in upper'
      },
      {
        name: 'The third node in upper'
      }
    ]
  }]
