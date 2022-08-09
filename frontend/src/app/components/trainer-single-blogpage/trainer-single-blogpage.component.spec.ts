import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerSingleBlogpageComponent } from './trainer-single-blogpage.component';

describe('TrainerSingleBlogpageComponent', () => {
  let component: TrainerSingleBlogpageComponent;
  let fixture: ComponentFixture<TrainerSingleBlogpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerSingleBlogpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerSingleBlogpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
