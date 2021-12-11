import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvidesComponent } from './provides.component';

describe('ProvidesComponent', () => {
  let component: ProvidesComponent;
  let fixture: ComponentFixture<ProvidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvidesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
