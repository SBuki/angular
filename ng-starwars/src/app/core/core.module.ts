import {NgModule, ModuleWithProviders} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpModule} from "@angular/http";
import {SwapiService} from "./swapi.service";

@NgModule({
  imports: [
    CommonModule, HttpModule
  ],
  declarations: [],
  providers: []
})
export class CoreModule {
  public static forRoot():ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [SwapiService]
    }
  }
  public static forChild():ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [SwapiService]
    }
  }

}
