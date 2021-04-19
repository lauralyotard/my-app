import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {A11yModule} from '@angular/cdk/a11y';
import {RouterModule} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
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

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    ProjetsComponent,
    ConfidentialiteComponent,
    CguComponent,
    MaintenanceComponent,
    BigfiitComponent,
    ExperiencesComponent,
    ContactComponent,
    CvComponent,
    UnivhairComponent,
    ProgestComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatGridListModule,
    RouterModule,
    AppRoutingModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    A11yModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
