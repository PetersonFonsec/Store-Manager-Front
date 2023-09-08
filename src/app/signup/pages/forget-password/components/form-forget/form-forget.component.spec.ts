import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormForgetComponent } from './form-forget.component';

describe('FormForgetComponent', () => {
  let component: FormForgetComponent;
  let fixture: ComponentFixture<FormForgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormForgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormForgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
