import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SelectionModeService {

  selectionMode$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  selectedAll$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  someChange$: BehaviorSubject<string> = new BehaviorSubject('default');

  totalRecords$: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor() { }
}
