import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentViewblogsComponent } from './student-viewblogs.component';

describe('StudentViewblogsComponent', () => {
  let component: StudentViewblogsComponent;
  let fixture: ComponentFixture<StudentViewblogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentViewblogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentViewblogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
