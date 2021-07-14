import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PhotosComponent} from './links_menu/photos/photos.component';
import { ConfidentialiteComponent } from './links_infos/confidentialite/confidentialite.component';
import { CguComponent } from './links_infos/cgu/cgu.component';
import { MaintenanceComponent } from './links_infos/maintenance/maintenance.component';
import { HorairesComponent } from './links_menu/horaires/horaires.component';
import { ContactComponent } from './links_infos/contact/contact.component';
import { UnivhairComponent } from './links_menu/univhair/univhair.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: {animation: 'Home'} },
  { path: 'photos', component: PhotosComponent, data: {animation: 'Photos'} },
  { path: 'univhair', component: UnivhairComponent, data: {animation: 'Univhair'} },
  { path: 'horaires', component: HorairesComponent, data: {animation: 'Horaires'} },
  { path: 'politique-de-confidentalite', component: ConfidentialiteComponent, data: {animation: 'Confidentialite'} },
  { path: 'conditions-generales-d-utilisation', component: CguComponent, data: {animation: 'CGU'} },
  { path: 'mises-a-jour', component: MaintenanceComponent, data: {animation: 'MAJ'} },
  { path: 'contact', component: ContactComponent, data: {animation: 'Contact'} }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
