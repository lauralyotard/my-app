import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatGridListModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
