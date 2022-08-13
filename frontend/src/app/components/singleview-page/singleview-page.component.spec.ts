import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleviewPageComponent } from './singleview-page.component';

describe('SingleviewPageComponent', () => {
  let component: SingleviewPageComponent;
  let fixture: ComponentFixture<SingleviewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleviewPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
