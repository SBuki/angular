import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {PlanetsModule} from "./planets/planets.module";
import {SwapiService} from "./core/swapi.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PlanetsModule
  ],
  providers: [SwapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
