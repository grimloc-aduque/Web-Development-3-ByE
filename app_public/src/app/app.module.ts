import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http' ;

// Base href
import {APP_BASE_HREF} from '@angular/common';  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderListComponent } from './pages/order-list/order-list.component';
import { DireccionPipe } from './pipes/direccion.pipe';
import { FechaPipe } from './pipes/fecha.pipe';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    OrderListComponent,
    DireccionPipe,
    FechaPipe,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
