import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bigfiit',
  templateUrl: './bigfiit.component.html',
  styleUrls: ['./bigfiit.component.css']
})
export class BigfiitComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('C\'est l\'or. Il est l\'or. L\'or de se réveiller. Mon seignor. Il est huit or.');
    console.log('Don Salluste - La Folie des Grandeurs');
  }

}
