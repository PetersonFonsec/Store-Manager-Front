import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesProductsHeaderComponent } from './tables-products-header.component';

describe('TablesProductsHeaderComponent', () => {
  let component: TablesProductsHeaderComponent;
  let fixture: ComponentFixture<TablesProductsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablesProductsHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablesProductsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
