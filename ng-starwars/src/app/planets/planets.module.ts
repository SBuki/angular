
import {NgModule} from "@angular/core";
import { PlanetListComponent } from './planet-list/planet-list.component';
import { PlanetListItemComponent } from './planet-list/planet-list-item/planet-list-item.component';
import {CoreModule} from "../core/core.module";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [CoreModule, CommonModule],
  declarations: [PlanetListComponent, PlanetListItemComponent],
  exports: [PlanetListComponent]
})
export class PlanetsModule {

}
