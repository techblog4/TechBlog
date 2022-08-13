import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSingleBlogApproveComponent } from './admin-single-blog-approve.component';

describe('AdminSingleBlogApproveComponent', () => {
  let component: AdminSingleBlogApproveComponent;
  let fixture: ComponentFixture<AdminSingleBlogApproveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSingleBlogApproveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSingleBlogApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
