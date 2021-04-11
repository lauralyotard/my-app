import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-who-i-am',
  templateUrl: './who-i-am.component.html',
  styleUrls: ['./who-i-am.component.css']
})
export class WhoIAmComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('Les combinaisons parfaites sont tellement rares dans ce monde imparfait.');
    console.log('Derek dans Teen Wolf');
  }

}
