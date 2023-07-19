import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NgxDatatableComponent } from './components/ngx-datatable/ngx-datatable.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {AgGridModule} from "ag-grid-angular";
import {HttpClientModule} from "@angular/common/http";
import {AgGridPlaygroundComponent} from "./components/ag-grid/ag-grid-playground.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AgGridPlaygroundComponent,
    NgxDatatableComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
