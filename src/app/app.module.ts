import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule} from '@angular/router';
import { ParcoursComponent } from './links_menu/parcours/parcours.component';
import { HomeComponent } from './home/home.component';
import {A11yModule} from '@angular/cdk/a11y';
import { PassionsComponent } from './links_menu/passions/passions.component';
import { StrengthsComponent } from './links_menu/strengths/strengths.component';
import { ConfidentialiteComponent } from './links_infos/confidentialite/confidentialite.component';
import { CguComponent } from './links_infos/cgu/cgu.component';
import { MaintenanceComponent } from './links_infos/maintenance/maintenance.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    ParcoursComponent,
    HomeComponent,
    PassionsComponent,
    StrengthsComponent,
    ConfidentialiteComponent,
    CguComponent,
    MaintenanceComponent
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
