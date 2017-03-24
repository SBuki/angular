import { Component, OnInit } from '@angular/core';
import {SwapiService} from "../../core/swapi.service";

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.css']
})
export class PlanetListComponent implements OnInit {

  planets = null;
  currentPage =1;
  totalPages = 1;

  constructor(private swapiService: SwapiService) { }

  ngOnInit() {
    this.swapiService
        .getPlanetes()
        .subscribe(({results, page, pages}) => {
          this.planets = results;
          this.currentPage = page;
          this.totalPages = pages;
        })
  }

}
