import { Injectable } from '@angular/core';
import {GridOptions} from "ag-grid-community";

@Injectable({
  providedIn: 'root'
})
export class AgGridService {

  private gridOptions: GridOptions;

  constructor() { }


  get options(){
    return this.gridOptions
  }

  set options(option){
    this.gridOptions = option
  }
}
