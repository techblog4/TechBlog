import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomesingleCategoryviewComponent } from './homesingle-categoryview.component';

describe('HomesingleCategoryviewComponent', () => {
  let component: HomesingleCategoryviewComponent;
  let fixture: ComponentFixture<HomesingleCategoryviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomesingleCategoryviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomesingleCategoryviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
