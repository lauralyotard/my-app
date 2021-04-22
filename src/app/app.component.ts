import { Component } from '@angular/core';
import { slideInAnimation} from './animations/other_anim';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [slideInAnimation],
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string;

  constructor() {}
}

