import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parcours',
  templateUrl: './parcours.component.html',
  styleUrls: ['./parcours.component.css']
})
export class ParcoursComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(' La vie c\'est comme une boîte de chocolats, on ne sait jamais sur quoi on va tomber.');
    console.log('Tom Hanks dans Forrest Gump');
  }

}
