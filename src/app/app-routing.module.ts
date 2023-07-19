import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AgGridPlaygroundComponent} from "./components/ag-grid/ag-grid-playground.component";

const routes: Routes = [
  {path:'', pathMatch:"full", redirectTo:'home'},
  {path:'home',component:HomeComponent,children:[
      {path:'ag-grid',component:AgGridPlaygroundComponent}
    ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
