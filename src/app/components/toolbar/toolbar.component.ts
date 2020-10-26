import {Component, OnDestroy, OnInit} from '@angular/core';
import {SelectionModeService} from "../../shared/services/selection/selection-mode.service";
import {AgGridService} from "../../shared/services/ag-grid/ag-grid.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit, OnDestroy {

  private someChangeSubscription: Subscription;
  private totalRecordsSubscription: Subscription;

  public totalRecords = 0;
  public totalSelectedRecords = 0;
  private isSelectionMode = false;

  constructor(
    private _agGrid: AgGridService,
    private _selectionMode: SelectionModeService
  ) { }

  ngOnInit(): void {
    this.initAllRecordsCount();
    this.initSelectedRecordsCount();
  }

  ngOnDestroy(): void {
    this.totalRecordsSubscription.unsubscribe();
    this.someChangeSubscription.unsubscribe();
  }

  agInit(params) {
  }

  toggleSelectionMode(){
    this.isSelectionMode = !this.isSelectionMode;
    this._selectionMode.selectionMode$.next(this.isSelectionMode);
    if(!this.isSelectionMode) {
      this._agGrid.options.api.deselectAll();
      this._selectionMode.someChange$.next('off selection mode')
    }
  }

  initAllRecordsCount(){
    this.totalRecordsSubscription = this._selectionMode.totalRecords$.subscribe(count => {
      this.totalRecords = count;
    })
  }

  initSelectedRecordsCount(){
    this.someChangeSubscription = this._selectionMode.someChange$.subscribe(()=>{
      this.totalSelectedRecords = this._agGrid.options.api.getSelectedRows().length;
    })

  }

}
