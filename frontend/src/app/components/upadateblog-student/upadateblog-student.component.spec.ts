import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpadateblogStudentComponent } from './upadateblog-student.component';

describe('UpadateblogStudentComponent', () => {
  let component: UpadateblogStudentComponent;
  let fixture: ComponentFixture<UpadateblogStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpadateblogStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpadateblogStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
