import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { SuperHero } from './superheroInterface';
import { Team } from './teamInterface';
import { Observable, BehaviorSubject } from 'rxjs';
import { IData } from './dataInterface';
import { TextAst } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class SuperheroService {

  accessToken = '136821957948463';
  url = 'https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/';
  teams: Observable<Team[]> ;

  private superheroes = new BehaviorSubject<SuperHero[]>([]);
  superheroes$ = this.superheroes.asObservable();

  data: IData = { link: '/search', searchWord: '', ids: []};
  constructor(private httpClient: HttpClient ) { }

  loadSuperHeroes(name: string): Observable<Team[]> {
    return this.httpClient.get<Team[]>('https://cors-anywhere.herokuapp.com/https://football98.p.rapidapi.com/'+name+'/squads',{
      headers: {'x-rapidapi-key':'0af3f37941msh7e87158c7ba7f03p12d3cajsn08369ff027bd',
      'x--host':'football98.p.rapidapi.com',
      'useQueryString' : 'true'
    }
   } );
   
  }
  loadTeam(name: string) {
    console.log("debug inside loadTeam");
//  this.callServer();  
  console.log(this.teams);
  }

  callServer() {
  const headers = new HttpHeaders()
          .set('Authorization', 'my-auth-token')
          .set('Content-Type', 'application/json');

    this.httpClient.get('http://localhost:3004/ranking/'+'test', {
    
    })
    .subscribe(data => {
      console.log('response is ', data)
    },
    (error) => {
      console.log('error is ', error)
  });
  }
  getRanking(name: string): Observable<Team[]> {
    return this.httpClient.get<Team[]>('http://localhost:3004/ranking/' + name,);
  }

  setFavorite(id: number) {

    let shTemp: SuperHero[] = this.superheroes.getValue();
    shTemp.forEach( superhero => {
      if (superhero.id === id) {
        superhero.favorite = !superhero.favorite;
      }
    });

    this.superheroes.next(shTemp);
  }

  updateSuperheroes(sh: SuperHero[]) {
    let shTemp: SuperHero[] = this.superheroes.getValue();
    shTemp = shTemp.filter(superhero => superhero.favorite === true);
    sh.forEach(superhero => {
      if (!this.shIncluded(shTemp, superhero)) {
        shTemp.push(superhero);
      }
    });
    this.superheroes.next(shTemp);
  }

  shIncluded(sh: SuperHero[], superhero: SuperHero) {
    if (sh.some(e => e.id === superhero.id)) { return true; }
    return false;
  }

  getData(): IData {
    return this.data;
  }

  setData(dt: IData) {
    this.data = dt;
  }
}
