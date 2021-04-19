import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passions',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('Aventurez-vous en dehors de votre zone de confort. Les récompenses en valent la peine.');
    console.log('Film Raiponce');
  }

}
