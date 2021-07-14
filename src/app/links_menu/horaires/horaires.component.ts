import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiences',
  templateUrl: './horaires.component.html',
  styleUrls: ['./horaires.component.css']
})
export class HorairesComponent implements OnInit {

  cardOne = false;
  cardTwo = true;
  cardThree = false;
  formation: string;
  myDate = new Date(Date.now());
  today = new Date(Date.now());
  infoDate: string;

  constructor() { }

  ngOnInit(): void {
    this.actuDateHoraires();
  }

  actuDateHoraires(): void{
    // tslint:disable-next-line:max-line-length
    if (this.today.getHours() > this.myDate.setHours(9) && this.today.getHours() < this.myDate.setHours(12) || this.today.getHours() > this.myDate.setHours(14) && this.today.getHours() < this.myDate.setHours(18)) {
      this.infoDate = 'Ouvert';
    } else {
      this.infoDate = 'Fermé';
    }
    console.log(this.today);
    console.log(this.myDate);
    console.log(this.infoDate);
    /*if (this.today.getDay() === 1 || 2 || 3 || 4 || 5) {
      // tslint:disable-next-line:max-line-length
      if (this.today.getHours() > this.myDate.setHours(9) && this.today.getHours() < this.myDate.setHours(12) && this.today.getHours() > this.myDate.setHours(14) && this.today.getHours() < this.myDate.setHours(18)) {
        this.infoDate = 'Ouvert';
      } else if (this.today.getDay() === 6) {
        if (this.today.getHours() > this.myDate.setHours(9) && this.today.getHours() < this.myDate.setHours(16)) {
          this.infoDate = 'Ouvert';
        } else {
          this.infoDate = 'Fermé';
        }
      }
    } else {
      this.infoDate = 'Fermé';
    }*/
  }
}
