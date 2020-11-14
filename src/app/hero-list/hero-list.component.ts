import { Component, OnInit, Input } from '@angular/core';
import { SuperHero } from '../shared/superheroInterface';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  @Input() superheroes: SuperHero[];
  constructor() { }

  ngOnInit() {
  }

}











/*
  Captain marvel : 'https://img1.looper.com/img/gallery/the-real-reason-captain-marvel-had-such-a-tiny-role-in-endgame/intro-1557949097.jpg'
  Spiderman : 'https://icdn2.digitaltrends.com/image/digitaltrends/spidermanraimisuitps4.jpg',
  Iron Man: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/002irm_ons_mas_mob_01_0.jpg'
  Thor: 'https://img.cinemablend.com/filter:scale/quill/4/7/6/1/5/e/47615e765c155760d0e854273f6d17c374973830.jpg?mw=600'
*/
