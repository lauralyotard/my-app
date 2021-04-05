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

  public fauxlangue(): boolean{
    if (this.langue) {
      this.langue = false;
    }
    return this.langue;
  }

  public vrailangue(): boolean{
    if (!this.langue) {
      this.langue = true;
    }
    return this.langue;
  }

  public fauxatouts(): boolean{
    if (this.atouts) {
      this.atouts = false;
    }
    return this.atouts;
  }

  public vraiatouts(): boolean{
    if (!this.atouts) {
      this.atouts = true;
    }
    return this.atouts;
  }

  public fauxskills(): boolean{
    if (this.skills) {
      this.skills = false;
    }
    return this.skills;
  }

  public vraiskills(): boolean{
    if (!this.skills) {
      this.skills = true;
    }
    return this.skills;
  }
}
