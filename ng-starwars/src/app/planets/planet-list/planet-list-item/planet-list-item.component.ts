import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-planet-list-item',
  templateUrl: './planet-list-item.component.html',
  styleUrls: ['./planet-list-item.component.css']
})
export class PlanetListItemComponent implements OnChanges {

  @Input()
  planet : any;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['planet'] && changes['planet'].currentValue){
      this.planet = Object.assign(changes['planet'].currentValue);
    };
  }

}
