import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ParcoursComponent} from './links_menu/parcours/parcours.component';
import {HomeComponent} from './home/home.component';
import {PassionsComponent} from './links_menu/passions/passions.component';
import {StrengthsComponent} from './links_menu/strengths/strengths.component';
import {ConfidentialiteComponent} from './links_infos/confidentialite/confidentialite.component';
import {CguComponent} from './links_infos/cgu/cgu.component';
import {MaintenanceComponent} from './links_infos/maintenance/maintenance.component';
import {WhoIAmComponent} from './links_menu/who-i-am/who-i-am.component';
import {BigfiitComponent} from './links_menu/bigfiit/bigfiit.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'parcours', component: ParcoursComponent },
  { path: 'passions', component: PassionsComponent },
  { path: 'atouts-et-competences', component: StrengthsComponent },
  { path: 'politique-de-confidentalite', component: ConfidentialiteComponent },
  { path: 'conditions-generales-d-utilisation', component: CguComponent },
  { path: 'mises-a-jour', component: MaintenanceComponent },
  { path: 'who-i-am', component: WhoIAmComponent },
  { path: 'bigfiit', component: BigfiitComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
