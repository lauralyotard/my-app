import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cgu',
  templateUrl: './cgu.component.html',
  styleUrls: ['./cgu.component.css']
})
export class CguComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('Margo always loved mysteries. And in everything that came afterward, I could never stop thinking that maybe she loved mysteries so much that she became one.');
    console.log('La face cachée de Margo');
  }

}
