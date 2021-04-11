import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css']
})
export class MaintenanceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('« Ohana » signifie « famille ». Famille signifie que personne ne doit être abandonné, ni oublié.');
    console.log('Lilo & Stitch');
  }

}
