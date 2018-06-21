import { TestBed, inject } from '@angular/core/testing';

import { PowerLocationsService } from './power-locations.service';

describe('PowerLocationsService', () => {
  let powerLocationsService: PowerLocationsService

  beforeEach(() => {
    powerLocationsService = new PowerLocationsService()
  });

  it('should be able to get power locations', () => {
    const rest = powerLocationsService.getLocations()
    rest.subscribe((locations) => {
      expect(locations.length).toEqual(1)
    })
  })
});
