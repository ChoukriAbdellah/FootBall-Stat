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
     // Remplacer le champ XXXXXXXX par votre api-key.
       headers: {'x-rapidapi-key':'XXXXXXXXXX',
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
