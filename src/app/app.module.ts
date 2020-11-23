import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JamListComponent } from './jam-list/jam-list.component';


import { FormsModule } from '@angular/forms';
import { JamAboutComponent } from './jam-about/jam-about.component';
import { JamProductsComponent } from './jam-products/jam-products.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { CarComponentComponent } from './car-component/car-component.component';


@NgModule({
  declarations: [
    AppComponent,
    JamListComponent,
    JamAboutComponent,
    JamProductsComponent,
    InputIntegerComponent,
    CarComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
