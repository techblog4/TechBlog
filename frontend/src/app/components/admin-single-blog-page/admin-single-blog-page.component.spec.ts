import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSingleBlogPageComponent } from './admin-single-blog-page.component';

describe('AdminSingleBlogPageComponent', () => {
  let component: AdminSingleBlogPageComponent;
  let fixture: ComponentFixture<AdminSingleBlogPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSingleBlogPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSingleBlogPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
