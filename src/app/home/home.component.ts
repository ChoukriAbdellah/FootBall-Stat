import { Component, OnInit } from '@angular/core';
import { SuperheroService } from '../shared/superhero.service';
import { SuperHero } from '../shared/superheroInterface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  superheroesMain: SuperHero[] ;
  constructor(private superheroService: SuperheroService) { }

  ngOnInit() {
  }

}
