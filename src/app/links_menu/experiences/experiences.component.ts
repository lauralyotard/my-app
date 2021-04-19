import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {

  cardOne = false;
  cardTwo = false;
  cardThree = false;
  formation: string;

  constructor() { }

  ngOnInit(): void {
  }

  selectCardOne(): void {
    this.cardOne = !this.cardOne;
    this.cardTwo = false;
    this.cardThree = false;
  }

  selectCardTwo(): void {
    this.cardOne = false;
    this.cardTwo = !this.cardTwo;
    this.cardThree = false;
  }

  selectCardThree(): void {
    this.cardOne = false;
    this.cardTwo = false;
    this.cardThree = !this.cardThree;
  }
}
