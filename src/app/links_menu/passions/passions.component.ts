import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passions',
  templateUrl: './passions.component.html',
  styleUrls: ['./passions.component.css']
})
export class PassionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('Aventurez-vous en dehors de votre zone de confort. Les récompenses en valent la peine.');
    console.log('Film Raiponce');
  }

}
