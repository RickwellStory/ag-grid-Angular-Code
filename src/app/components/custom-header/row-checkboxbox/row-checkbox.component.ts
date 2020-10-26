import {Component, OnDestroy, OnInit} from '@angular/core';
import {SelectionModeService} from "../../../shared/services/selection/selection-mode.service";
import {AgGridService} from "../../../shared/services/ag-grid/ag-grid.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-row-checkbox',
  templateUrl: './row-checkbox.component.html',
  styleUrls: ['./row-checkbox.component.scss']
})
export class RowCheckboxComponent implements OnInit, OnDestroy {

  private someChangeSubscription: Subscription;
  private params;
  public isSelectedRow = false;

  constructor(
    private _agGrid: AgGridService,
    private _selectionMode: SelectionModeService
  ) { }

  ngOnInit(): void {
    this.initSelectedRow();
  }
  ngOnDestroy(): void {
    this.someChangeSubscription.unsubscribe();
  }

  agInit(params: any): void {
    this.params = params;
    this.isSelectedRow = this.params.node.isSelected()
  }

  initSelectedRow(){
    this.someChangeSubscription = this._selectionMode.someChange$.subscribe(status => {
      this.isSelectedRow = this.params.node.isSelected()
    })
  }

  selectRow(isSelected: boolean) {
    this.params.node.setSelected(isSelected, false);
    isSelected
      ? this._agGrid.options.api.selectNode(this.params.node, true)
      : this._agGrid.options.api.deselectNode(this.params.node);
    this._selectionMode.someChange$.next(`row selected ${isSelected}`);

  }



}
