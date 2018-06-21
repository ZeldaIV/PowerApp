import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-power-control',
  templateUrl: './power-control.component.html',
  styleUrls: ['./power-control.component.css']
})
export class PowerControlComponent implements OnInit {
  @Input() powerLocation: any
  turnedOn: boolean
  constructor() { }

  ngOnInit() {
    this.turnedOn = false
  }

  powerOn() {
    this.turnedOn = true
  }

  powerOff() {
    this.turnedOn = false
  }

}
