import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglepagerightComponent } from './singlepageright.component';

describe('SinglepagerightComponent', () => {
  let component: SinglepagerightComponent;
  let fixture: ComponentFixture<SinglepagerightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglepagerightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglepagerightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
