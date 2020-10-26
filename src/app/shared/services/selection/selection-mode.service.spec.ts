import { TestBed } from '@angular/core/testing';

import { SelectionModeService } from './selection-mode.service';

describe('SelectionModeService', () => {
  let service: SelectionModeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectionModeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
