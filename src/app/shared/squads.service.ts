import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Team } from './teamInterface';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SquadsService {

  teams: Observable<Team[]> ;


  constructor(private httpClient: HttpClient ) { }

  loadSquads(championship : string): Observable<Team[]> {
    return this.httpClient.get<Team[]>('https://cors-anywhere.herokuapp.com/https://football98.p.rapidapi.com/'+championship+'/squads',{
      headers: {'x-rapidapi-key':'0af3f37941msh7e87158c7ba7f03p12d3cajsn08369ff027bd',
      'x--host':'football98.p.rapidapi.com',
      'useQueryString' : 'true'
    }
   } );
   
  }

  searchToChampionschipWord(search: string) : string{
    
    switch(search) { 
      case 'Liga': { 
         return 'liga'; 
          
      } 
      case 'liga': { 
        return 'liga'; 
         
     } 
      case 'la première ligue': { 
         return 'premierleague'; 
          
      } 
      case 'première ligue': { 
        return 'premierleague'; 
     } 
     case 'première ligue ': { 
      return 'premierleague'; 
      
   } 
     case 'La ligue 1': { 
      return 'ligue1'; 
     
  }
    case 'ligue 1': { 
      return 'ligue1'; 
    
  }
    case 'Ligue 1': { 
      return 'ligue1'; 
    
  } 
    case 'Serie a': { 
      return 'seriea'; 
      break; 
    } 
       
   } 
    return "no matching";
  }

  setFavorite(id: number) {
    //state : in  development
  }



}
