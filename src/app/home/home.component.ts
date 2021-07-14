import { Component, OnInit } from '@angular/core';
import Splide from '@splidejs/splide';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    new Splide( '.splide', {
      type        : 'loop',
      perPage     : 1,
      autoplay    : true,
      pauseOnHover: false,
    } ).mount();
    /*new Splide('.splide').mount();*/
  }
}
