import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesProductsItemComponent } from './tables-products-item.component';

describe('TablesProductsItemComponent', () => {
  let component: TablesProductsItemComponent;
  let fixture: ComponentFixture<TablesProductsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablesProductsItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablesProductsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
