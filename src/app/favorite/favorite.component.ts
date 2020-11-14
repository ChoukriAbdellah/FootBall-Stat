import { Component, OnInit } from '@angular/core';
import { SuperheroService } from '../shared/superhero.service';
import { SuperHero } from '../shared/superheroInterface';
import { IData } from '../shared/dataInterface';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent  {


  constructor(private superheroService: SuperheroService) { }



}
