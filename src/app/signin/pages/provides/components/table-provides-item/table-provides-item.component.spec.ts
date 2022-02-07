import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableProvidesItemComponent } from './table-provides-item.component';

describe('TableProvidesItemComponent', () => {
  let component: TableProvidesItemComponent;
  let fixture: ComponentFixture<TableProvidesItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableProvidesItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableProvidesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
