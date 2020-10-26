import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'

import { AgGridModule } from 'ag-grid-angular';
import { AgGridComponent } from './pages/ag-grid/ag-grid.component';
import'ag-grid-enterprise';

import { WelcomeComponent } from './pages/welcome/welcome.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ColumnCheckboxComponent } from './components/custom-header/column-checkbox/column-checkbox.component';
import { RowCheckboxComponent } from './components/custom-header/row-checkboxbox/row-checkbox.component';

import { HttpClientModule } from "@angular/common/http";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from "@angular/material/button";
import { MatRippleModule } from "@angular/material/core";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatCheckboxModule } from "@angular/material/checkbox";



@NgModule({
  declarations: [
    AppComponent,
    AgGridComponent,
    WelcomeComponent,
    ToolbarComponent,
    ColumnCheckboxComponent,
    RowCheckboxComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AgGridModule.withComponents([]),
    HttpClientModule,
    MatButtonModule,
    MatRippleModule,
    MatSlideToggleModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
