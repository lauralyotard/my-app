import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ParcoursComponent} from './links_menu/parcours/parcours.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'parcours', component: ParcoursComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
