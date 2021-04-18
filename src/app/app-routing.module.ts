import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ParcoursComponent} from './links_menu/parcours/parcours.component';
import {HomeComponent} from './home/home.component';
import {ProjetsComponent} from './links_menu/projets/projets.component';
import {StrengthsComponent} from './links_menu/strengths/strengths.component';
import {ConfidentialiteComponent} from './links_infos/confidentialite/confidentialite.component';
import {CguComponent} from './links_infos/cgu/cgu.component';
import {MaintenanceComponent} from './links_infos/maintenance/maintenance.component';
import {WhoIAmComponent} from './links_menu/who-i-am/who-i-am.component';
import {BigfiitComponent} from './links_menu/bigfiit/bigfiit.component';
import {ExperiencesComponent} from './links_menu/experiences/experiences.component';
import {ContactComponent} from './links_infos/contact/contact.component';
import {CvComponent} from './cv/cv.component';
import {UnivhairComponent} from './links_menu/univhair/univhair.component';
import {ProgestComponent} from './links_menu/progest/progest.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'parcours', component: ParcoursComponent },
  { path: 'projets', component: ProjetsComponent },
  { path: 'univhair', component: UnivhairComponent },
  { path: 'progest', component: ProgestComponent },
  { path: 'experiences', component: ExperiencesComponent },
  { path: 'cv', component: CvComponent },
  { path: 'atouts-et-competences', component: StrengthsComponent },
  { path: 'politique-de-confidentalite', component: ConfidentialiteComponent },
  { path: 'conditions-generales-d-utilisation', component: CguComponent },
  { path: 'mises-a-jour', component: MaintenanceComponent },
  { path: 'who-i-am', component: WhoIAmComponent },
  { path: 'bigfiit', component: BigfiitComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
