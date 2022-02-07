import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericItemLoadingComponent } from './generic-item-loading.component';

describe('GenericItemLoadingComponent', () => {
  let component: GenericItemLoadingComponent;
  let fixture: ComponentFixture<GenericItemLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericItemLoadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericItemLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
