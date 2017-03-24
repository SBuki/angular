import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";

import 'rxjs/add/operator/map';

const BASE_URL = 'https://swapi.co/api/';
const PLANETS_URL = `${BASE_URL}planets/`;
const PEOPLE_URL = `${BASE_URL}people/`;
const MOVIES_URL = `${BASE_URL}movies/`;

@Injectable()
export class SwapiService {

  constructor(private http:Http) { }

  getPlanetes():Observable<any> {
    return this.http
      .get(PLANETS_URL)
      .map((res: Response) => res.json());
  }
}
