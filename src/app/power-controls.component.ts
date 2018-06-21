import { Component, OnInit } from '@angular/core';

import { PowerControlComponent } from './power-control.component'
import { PowerLocationsService } from './power-locations.service'
import { PowerLocation } from '../shared/power-location.model';

@Component({
  selector: 'app-power-controls',
  templateUrl: './power-controls.component.html',
  styleUrls: ['./power-controls.component.css']
})
export class PowerControlsComponent implements OnInit {
  public powerLocations: PowerLocation[]

  constructor(private service: PowerLocationsService) {
    this.powerLocations = this.service.locations
   }

  ngOnInit() {
    
  }
}
