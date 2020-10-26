import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnCheckboxComponent } from './column-checkbox.component';

describe('ColumnCheckboxComponent', () => {
  let component: ColumnCheckboxComponent;
  let fixture: ComponentFixture<ColumnCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumnCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
