import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBlogCategoryComponent } from './admin-blog-category.component';

describe('AdminBlogCategoryComponent', () => {
  let component: AdminBlogCategoryComponent;
  let fixture: ComponentFixture<AdminBlogCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminBlogCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBlogCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
