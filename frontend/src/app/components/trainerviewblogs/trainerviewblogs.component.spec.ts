import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerviewblogsComponent } from './trainerviewblogs.component';

describe('TrainerviewblogsComponent', () => {
  let component: TrainerviewblogsComponent;
  let fixture: ComponentFixture<TrainerviewblogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerviewblogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerviewblogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
