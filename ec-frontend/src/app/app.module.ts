import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CameraTableComponent } from './components/camera-table/camera-table.component';
import { MapComponent } from './components/map/map.component';
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CameraTableComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
