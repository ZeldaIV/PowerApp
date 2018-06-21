import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PowerControlsComponent } from './power-controls.component';
import { PowerControlComponent } from './power-control.component';
import { PowerLocationsService } from './power-locations.service'


@NgModule({
  declarations: [
    AppComponent,
    PowerControlsComponent,
    PowerControlComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ PowerLocationsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
