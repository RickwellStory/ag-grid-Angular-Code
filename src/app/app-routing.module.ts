import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AgGridComponent} from "./pages/ag-grid/ag-grid.component";
import {WelcomeComponent} from "./pages/welcome/welcome.component";


const routes: Routes = [
  { path: '', component: WelcomeComponent},
  { path: 'list', component: AgGridComponent},
  { path: '**', pathMatch: 'full', redirectTo: ''}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
