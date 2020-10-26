import {Component, OnDestroy, OnInit} from '@angular/core';
import {ColumnApi, GridOptions} from "ag-grid-community";
import {ApiService} from "../../shared/services/api/api.service";
import {IItemResponse} from "../../shared/interfaces/item.interface";
import {ToolbarComponent} from "../../components/toolbar/toolbar.component";
import {ColumnCheckboxComponent} from "../../components/custom-header/column-checkbox/column-checkbox.component";
import {RowCheckboxComponent} from "../../components/custom-header/row-checkboxbox/row-checkbox.component";
import {SelectionModeService} from "../../shared/services/selection/selection-mode.service";
import {Subscription} from "rxjs";
import {AgGridService} from "../../shared/services/ag-grid/ag-grid.service";
@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.scss']
})
export class AgGridComponent implements OnInit, OnDestroy {

  private rowDataSubscription: Subscription;
  private selectionModeSubscription: Subscription;


  private columnApi: ColumnApi;
  public gridOptions: GridOptions;
  public rowData: Array<any>;

  constructor(
    private _api: ApiService,
    private _agGrid: AgGridService,
    private _selectionMode: SelectionModeService
  ) {}

  ngOnInit(): void {
    this.initGridOptions();
    this.initGridRows();

  }
  ngOnDestroy(): void {
    this.rowDataSubscription.unsubscribe();
    this.selectionModeSubscription.unsubscribe();
  }

  onGridReady(params) {
    this.columnApi = params.columnApi;
    this.initSelectionMode();

  }

  initGridOptions(){
    this.gridOptions = {
      pagination: true,
      columnDefs: [
        {
          headerName: '',
          headerGroupComponent: 'toolbar',
          children: [
            {
              headerName: '',
              field: 'selection-mode',
              width: 60,
              cellRendererFramework: RowCheckboxComponent,
              headerComponentFramework: ColumnCheckboxComponent,
              hide: true,
            },
            {
              headerName: '',
              field: 'thumbnails',
              width: 200,
              autoHeight: true,
              sortable: true,
              cellRenderer:  data => this.initThumbnailsView(data.data)
            },
            {
              headerName: 'Published on',
              field: 'publishedAt',
              minWidth: 140,
              sortable: true,
              valueGetter: 'data.snippet.publishedAt',
              valueFormatter: data => this.formatDate(data.data.snippet.publishedAt)
            },
            {
              headerName: 'Video Title',
              field: 'title',
              minWidth: 600,
              autoHeight: true,
              wrapText: true,
              sortable: true,
              valueGetter: 'data.snippet.title',
              cellRenderer: data => this.initTitleLink(data.data, data.data.snippet.title )
            },
            {
              headerName: 'Description',
              field: 'description',
              minWidth: 600,
              autoHeight: true,
              wrapText: true,
              sortable: true,
              valueGetter: 'data.snippet.description'
            }
          ]
        }
      ],
      frameworkComponents: {
        toolbar: ToolbarComponent,
        customHeader: ColumnCheckboxComponent
      },
    };
    this._agGrid.options = this.gridOptions;
  }

  initGridRows(){
    this.rowDataSubscription = this._api.get().subscribe(data => {
      this.rowData = data.items;
      this._selectionMode.totalRecords$.next(this.rowData.length);
    })
  }

  initThumbnailsView(video: IItemResponse) {
    return `<img src="${video.snippet.thumbnails.default.url}" style="width: ${video.snippet.thumbnails.default.width}px; height: ${video.snippet.thumbnails.default.height}px">`
  }

  initTitleLink(video: IItemResponse, title) {
    return `<a style="color: #f44336" href="https://www.youtube.com/watch?v=${video.id.videoId}" target="_blank">${title}</a>`
  }

  initSelectionMode() {
    this.selectionModeSubscription = this._selectionMode.selectionMode$.subscribe(status =>
      this.columnApi.setColumnVisible('selection-mode', status)
    );
  }

  getContextMenuItems(params){
    if(params.column.getColId() === 'title'){
      return [
        {
          name: 'Open in new tab',
          action: function () {
            const url = `https://www.youtube.com/watch?v=${params.node.data.id.videoId}`;
            window.open(url);
          }
        }
      ];
    }
    else return null;
  }

  formatDate(publishedDate: string): string{
    let date = new Date(publishedDate);
    return date.toLocaleString()
  }


}
