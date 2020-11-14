import { Component, Input, OnInit } from '@angular/core';
import { Team } from '../shared/teamInterface';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  @Input('team') team : Team;
    debug ='debug message ';
  constructor() { }

  ngOnInit(): void {
  }

}
