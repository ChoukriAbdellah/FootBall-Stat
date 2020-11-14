import { Component, OnInit } from '@angular/core';
import { SuperheroService } from '../shared/superhero.service';
import { SuperHero } from '../shared/superheroInterface';
import { IData } from '../shared/dataInterface';
import { HttpClient } from '@angular/common/http';
import { Team } from '../shared/teamInterface';
import { SquadsService } from '../shared/squads.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  mot = '';
  errorText = '';
  search ='';
  squads: Team[] = [];
  notFound = false;
  constructor(private squadsService: SquadsService) { }

  ngOnInit() {
    // if (this.data.searchWord !== '') { this.mot = this.data.searchWord; this.formSubmit(); }

  }
 
  formSubmit() {
    this.notFound = false;
    this.squads=[];
    if (this.mot.length < 4) {
      this.errorText = 'La recherche doit comporter plus de 3 lettres';
    } else {
      console.log("before "+ this.mot);
      
      if(this.squadsService.searchToChampionschipWord(this.mot) === 'no matching'){
        alert('Nom de championat non prise en charge.');
      }
      console.log("after "+ this.mot);
      this.squadsService.loadSquads(this.mot).subscribe(resultat => {
          console.log(resultat);

          if(resultat['message'] != 'No squads found'){
        resultat.forEach(
          element => this.squads.push(element)
                  );
        }
        else{
          alert('Aucun résultat pour cette recherche.');
          console.log("Aucun résultat pour cette recherche");
          this.squads = [];
        }
      

      
    });
  }
  }

}
