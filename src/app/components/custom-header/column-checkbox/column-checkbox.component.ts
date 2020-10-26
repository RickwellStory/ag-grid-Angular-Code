import {Component, OnDestroy, OnInit} from '@angular/core';
import {AgGridService} from "../../../shared/services/ag-grid/ag-grid.service";
import {SelectionModeService} from "../../../shared/services/selection/selection-mode.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-column-checkbox',
  templateUrl: './column-checkbox.component.html',
  styleUrls: ['./column-checkbox.component.scss']
})
export class ColumnCheckboxComponent implements OnInit, OnDestroy {


  private someChangeSubscription: Subscription;
  public checkboxChecked = false;

  constructor(
    private _agGrid: AgGridService,
    private _selectionMode: SelectionModeService
  ) { }

  ngOnInit(): void {
    this.isSelectedAll();
  }

  ngOnDestroy(): void {
    this.someChangeSubscription.unsubscribe();
  }

  agInit(params: any): void {
  }

  onSelect(isSelected: boolean) {
    isSelected
      ? this._agGrid.options.api.selectAll()
      : this._agGrid.options.api.deselectAll();
    this._selectionMode.selectedAll$.next(isSelected);
    this._selectionMode.someChange$.next('select or unselect all')


  }

  isSelectedAll() {
    this.someChangeSubscription = this._selectionMode.someChange$.subscribe( (data) => {
      this.checkboxChecked = this._agGrid.options.api.getDisplayedRowCount() === this._agGrid.options.api.getSelectedRows().length
    })
  }

}
