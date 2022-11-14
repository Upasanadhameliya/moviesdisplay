import { Component, OnInit } from '@angular/core';
import { navBarData } from './nav-data';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  collapsed = false;
  navData = navBarData;

  constructor() { }

  ngOnInit(): void {
  }

}
