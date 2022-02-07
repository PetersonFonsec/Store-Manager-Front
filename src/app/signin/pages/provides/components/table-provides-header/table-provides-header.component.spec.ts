import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableProvidesHeaderComponent } from './table-provides-header.component';

describe('TableProvidesHeaderComponent', () => {
  let component: TableProvidesHeaderComponent;
  let fixture: ComponentFixture<TableProvidesHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableProvidesHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableProvidesHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
