import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSingleBlogpageComponentComponent } from './student-single-blogpage-component.component';

describe('StudentSingleBlogpageComponentComponent', () => {
  let component: StudentSingleBlogpageComponentComponent;
  let fixture: ComponentFixture<StudentSingleBlogpageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentSingleBlogpageComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentSingleBlogpageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
