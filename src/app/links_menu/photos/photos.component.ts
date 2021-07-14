import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passions',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  add = 0;
  addtf1 = false;
  add1 = 0;
  addtf2 = false;
  add2 = 0;
  constructor() { }

  ngOnInit(): void {
  }

  addOn(add: number): void {
    if (add === 1) {
      if (!this.addtf1) {
        this.add1++;
        this.addtf1 = true;
      } else {
        this.add1--;
        this.addtf1 = false;
      }
    }

    if (add === 2) {
      if (!this.addtf2) {
        this.add2++;
        this.addtf2 = true;
      } else {
        this.add2--;
        this.addtf2 = false;
      }
    }
  }

}
