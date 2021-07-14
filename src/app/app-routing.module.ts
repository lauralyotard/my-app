import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProjetsComponent } from './links_menu/projets/projets.component';
import { ConfidentialiteComponent } from './links_infos/confidentialite/confidentialite.component';
import { CguComponent } from './links_infos/cgu/cgu.component';
import { MaintenanceComponent } from './links_infos/maintenance/maintenance.component';
import { BigfiitComponent } from './links_menu/bigfiit/bigfiit.component';
import { ExperiencesComponent } from './links_menu/experiences/experiences.component';
import { ContactComponent } from './links_infos/contact/contact.component';
import { CvComponent } from './cv/cv.component';
import { UnivhairComponent } from './links_menu/univhair/univhair.component';
import { ProgestComponent } from './links_menu/progest/progest.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: {animation: 'Home'} },
  { path: 'projets', component: ProjetsComponent, data: {animation: 'Projets'} },
  { path: 'univhair', component: UnivhairComponent, data: {animation: 'Univhair'} },
  { path: 'progest', component: ProgestComponent, data: {animation: 'Progest'} },
  { path: 'experiences', component: ExperiencesComponent, data: {animation: 'Experiences'} },
  { path: 'cv', component: CvComponent, data: {animation: 'CV'} },
  { path: 'politique-de-confidentalite', component: ConfidentialiteComponent, data: {animation: 'Confidentialite'} },
  { path: 'conditions-generales-d-utilisation', component: CguComponent, data: {animation: 'CGU'} },
  { path: 'mises-a-jour', component: MaintenanceComponent, data: {animation: 'MAJ'} },
  { path: 'bigfiit', component: BigfiitComponent, data: {animation: 'BigFiit'} },
  { path: 'contact', component: ContactComponent, data: {animation: 'Contact'} }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
