import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as M from 'materialize-css';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterViewInit {

  @ViewChild('sidenav') sidenav: ElementRef;
  navbarColor = environment.navbarColor;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    M.Sidenav.init(this.sidenav.nativeElement);
  }

  closeMenu() {
    const instance = M.Sidenav.getInstance(this.sidenav.nativeElement);
    instance.close();
  }

}
