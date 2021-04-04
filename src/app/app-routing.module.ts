import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ParcoursComponent} from './links_menu/parcours/parcours.component';
import {HomeComponent} from './home/home.component';
import {PassionsComponent} from './links_menu/passions/passions.component';
import {StrengthsComponent} from './links_menu/strengths/strengths.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'parcours', component: ParcoursComponent },
  { path: 'passions', component: PassionsComponent },
  { path: 'atouts-et-competences', component: StrengthsComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
