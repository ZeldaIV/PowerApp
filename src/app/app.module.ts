import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import {MatButtonModule, MatCheckboxModule} from '@angular/material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatMenuModule} from '@angular/material/menu'
import {MatIconModule} from '@angular/material/icon'
import {MatSlideToggleModule} from '@angular/material/slide-toggle'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatCardModule} from '@angular/material/card'
import {MatListModule} from '@angular/material/list'
import { AppComponent } from './app.component'
import { PowerControlsComponent } from './power-controls.component'
import { PowerControlComponent } from './power-control.component'
import { PowerLocationsService } from './power-locations.service'
import {MatGridListModule} from '@angular/material/grid-list'


@NgModule({
  declarations: [
    AppComponent,
    PowerControlsComponent,
    PowerControlComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatGridListModule
  ],
  providers: [ PowerLocationsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
