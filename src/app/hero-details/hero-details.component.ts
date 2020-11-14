import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { SuperheroService } from '../shared/superhero.service';
import { SuperHero } from '../shared/superheroInterface';

import * as M from 'materialize-css';import { IData } from '../shared/dataInterface';
1

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('favBtn') favBtn: ElementRef;

  @Input('superhero') superhero: SuperHero;

  data: IData;

  constructor(private superheroService: SuperheroService) {}

  ngOnInit() {}

  addFavorite() {
    this.superheroService.setFavorite(this.superhero.id);
  }

  ngAfterViewInit() {
    M.Tooltip.init(this.favBtn.nativeElement);
  }

  ngOnDestroy() {
    const instance = M.Tooltip.getInstance(this.favBtn.nativeElement);
    instance.destroy();
  }

}
