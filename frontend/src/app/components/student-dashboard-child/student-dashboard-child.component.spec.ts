import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDashboardChildComponent } from './student-dashboard-child.component';

describe('StudentDashboardChildComponent', () => {
  let component: StudentDashboardChildComponent;
  let fixture: ComponentFixture<StudentDashboardChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentDashboardChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDashboardChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
