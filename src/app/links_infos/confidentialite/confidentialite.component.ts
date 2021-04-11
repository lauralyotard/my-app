import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confidentialite',
  templateUrl: './confidentialite.component.html',
  styleUrls: ['./confidentialite.component.css']
})
export class ConfidentialiteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('Comment définir le réel ? Ce que tu ressens, vois, goûtes ou respires, ne sont rien que des impulsions électriques interprétées par ton cerveau.');
    console.log('Matrix');
  }

}
