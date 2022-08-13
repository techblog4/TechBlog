import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerDashboardChildComponent } from './trainer-dashboard-child.component';

describe('TrainerDashboardChildComponent', () => {
  let component: TrainerDashboardChildComponent;
  let fixture: ComponentFixture<TrainerDashboardChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerDashboardChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerDashboardChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
