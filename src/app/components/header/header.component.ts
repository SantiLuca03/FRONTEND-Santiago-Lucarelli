import { Component, OnInit } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faEnvelope = faEnvelope;
  faLink = faLink;
  faSun = faSun;
  faMoon = faMoon;
  faUser = faUser;

  constructor() { }

  ngOnInit(): void {
  }

}
