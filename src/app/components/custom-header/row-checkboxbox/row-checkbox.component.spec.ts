import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowCheckboxComponent } from './row-checkbox.component';

describe('RowCheckboxboxComponent', () => {
  let component: RowCheckboxComponent;
  let fixture: ComponentFixture<RowCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
