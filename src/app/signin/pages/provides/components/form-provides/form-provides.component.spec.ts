import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProvidesComponent } from './form-provides.component';

describe('FormProvidesComponent', () => {
  let component: FormProvidesComponent;
  let fixture: ComponentFixture<FormProvidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormProvidesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormProvidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
