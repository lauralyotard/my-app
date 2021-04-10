import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-strengths',
  templateUrl: './strengths.component.html',
  styleUrls: ['./strengths.component.css']
})
export class StrengthsComponent implements OnInit {

  langue: boolean;
  atouts: boolean;
  skills: boolean;

  constructor() { }

  ngOnInit(): void {}

  moreL(): boolean {
    return this.langue = true;
  }

  lessL(): boolean {
    return this.langue = false;
  }

  moreA(): boolean {
    return this.atouts = true;
  }

  lessA(): boolean {
    return this.atouts = false;
  }

  moreS(): boolean {
    return this.skills = true;
  }

  lessS(): boolean {
    return this.skills = false;
  }
}
