import { Component, OnInit , Input } from '@angular/core';
import { Team } from '../shared/teamInterface';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

  @Input() squads: Team[];
  
 /* squads: Team[]= [
     {'squad_position': 12,
     'squad_name': 'paris',
     'squad_points': 23,
     'squad_played': 23,
     'squad_winned': 23,
     'squad_loosed': 23,
     'squad_tie': 23},
     {'squad_position': 12,
     'squad_name': 'OM',
     'squad_points': 23,
     'squad_played': 23,
     'squad_winned': 23,
     'squad_loosed': 23,
     'squad_tie': 23}
   ]*/
  constructor() { }

  ngOnInit(): void {
  }
  

}
