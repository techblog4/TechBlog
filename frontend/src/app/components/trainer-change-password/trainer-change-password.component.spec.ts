import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerChangePasswordComponent } from './trainer-change-password.component';

describe('TrainerChangePasswordComponent', () => {
  let component: TrainerChangePasswordComponent;
  let fixture: ComponentFixture<TrainerChangePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerChangePasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
